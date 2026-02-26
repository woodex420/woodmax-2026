import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export interface Message {
  id: string;
  sender_type: 'visitor' | 'agent' | 'system';
  message_text: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  status: 'waiting' | 'active' | 'resolved' | 'closed';
  visitor_name?: string;
  visitor_email?: string;
  visitor_phone?: string;
}

export const useChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const { toast } = useToast();
  const channelRef = useRef<any>(null);

  // Create a new conversation
  const startConversation = async (visitorInfo?: { name?: string; email?: string; phone?: string }) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('chat_conversations')
        .insert({
          visitor_name: visitorInfo?.name,
          visitor_email: visitorInfo?.email,
          visitor_phone: visitorInfo?.phone,
          status: 'waiting'
        })
        .select()
        .single();

      if (error) throw error;

      setConversation(data as Conversation);
      
      // Send welcome message
      await sendSystemMessage(data.id, 'Thank you for contacting WoodEx Support. An agent will be with you shortly.');
      
      // Subscribe to real-time updates
      subscribeToMessages(data.id);
      
      return data;
    } catch (error) {
      console.error('Error starting conversation:', error);
      toast({
        title: 'Error',
        description: 'Failed to start conversation. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send a message
  const sendMessage = async (text: string) => {
    if (!conversation || !text.trim()) return;

    try {
      setIsLoading(true);
      
      // Send visitor message
      const { data, error } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversation.id,
          sender_type: 'visitor',
          message_text: text.trim()
        })
        .select()
        .single();

      if (error) throw error;

      // Update last message timestamp
      await supabase
        .from('chat_conversations')
        .update({ last_message_at: new Date().toISOString() })
        .eq('id', conversation.id);

      setInputMessage('');

      // Get AI response
      try {
        const response = await supabase.functions.invoke('ai-chat', {
          body: {
            conversationId: conversation.id,
            message: text.trim(),
          }
        });

        if (response.error) {
          console.error('AI response error:', response.error);
        }
      } catch (aiError) {
        console.error('AI invocation error:', aiError);
        // AI error doesn't stop the conversation
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send system message
  const sendSystemMessage = async (conversationId: string, text: string) => {
    try {
      await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversationId,
          sender_type: 'system',
          message_text: text
        });
    } catch (error) {
      console.error('Error sending system message:', error);
    }
  };

  // Subscribe to real-time message updates
  const subscribeToMessages = (conversationId: string) => {
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
    }

    channelRef.current = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    // Load existing messages
    loadMessages(conversationId);
  };

  // Load existing messages
  const loadMessages = async (conversationId: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      setMessages((data || []) as Message[]);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  // Handle action clicks
  const handleAction = async (action: string) => {
    if (!conversation) {
      await startConversation();
    }
    
    let message = '';
    switch (action) {
      case 'product':
        message = 'I have a question about a product';
        break;
      case 'quote':
        message = 'I would like to request a quote';
        break;
      case 'showroom':
        message = 'I would like to schedule a showroom visit';
        break;
      case 'support':
        message = 'I need live support';
        break;
      case 'callback':
        message = 'I would like to request a callback';
        break;
    }
    
    if (message) {
      await sendMessage(message);
    }
  };

  // Cleanup subscription on unmount
  useEffect(() => {
    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  }, []);

  return {
    isOpen,
    setIsOpen,
    messages,
    conversation,
    isLoading,
    inputMessage,
    setInputMessage,
    startConversation,
    sendMessage,
    handleAction,
  };
};
