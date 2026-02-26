import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, MessageCircle, User, Bot } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { KnowledgeUpload } from '@/components/KnowledgeUpload';

interface Conversation {
  id: string;
  visitor_name?: string;
  visitor_email?: string;
  visitor_phone?: string;
  status: string;
  created_at: string;
  last_message_at: string;
}

interface Message {
  id: string;
  sender_type: string;
  message_text: string;
  created_at: string;
}

const AgentDashboard = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState('waiting');
  const { toast } = useToast();

  useEffect(() => {
    loadConversations();
    subscribeToConversations();
  }, [activeTab]);

  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation.id);
      subscribeToMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  const loadConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_conversations')
        .select('*')
        .eq('status', activeTab)
        .order('last_message_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      console.error('Error loading conversations:', error);
    }
  };

  const loadMessages = async (conversationId: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const subscribeToConversations = () => {
    const channel = supabase
      .channel('conversations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat_conversations',
        },
        () => {
          loadConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const subscribeToMessages = (conversationId: string) => {
    const channel = supabase
      .channel(`messages-${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const sendMessage = async () => {
    if (!selectedConversation || !inputMessage.trim()) return;

    try {
      const { error } = await supabase.from('chat_messages').insert({
        conversation_id: selectedConversation.id,
        sender_type: 'agent',
        message_text: inputMessage.trim(),
      });

      if (error) throw error;

      // Update conversation status to active if waiting
      if (selectedConversation.status === 'waiting') {
        await supabase
          .from('chat_conversations')
          .update({ status: 'active' })
          .eq('id', selectedConversation.id);
      }

      // Update last message timestamp
      await supabase
        .from('chat_conversations')
        .update({ last_message_at: new Date().toISOString() })
        .eq('id', selectedConversation.id);

      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message',
        variant: 'destructive',
      });
    }
  };

  const updateConversationStatus = async (status: string) => {
    if (!selectedConversation) return;

    try {
      const { error } = await supabase
        .from('chat_conversations')
        .update({ status })
        .eq('id', selectedConversation.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Conversation marked as ${status}`,
      });

      setSelectedConversation({ ...selectedConversation, status });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update conversation status',
        variant: 'destructive',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-500';
      case 'active':
        return 'bg-green-500';
      case 'resolved':
        return 'bg-blue-500';
      case 'closed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Bot className="h-8 w-8" />
          AI-Powered Agent Dashboard
        </h1>

        <div className="mb-6">
          <KnowledgeUpload />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-450px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="waiting">Waiting</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-400px)]">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`w-full text-left p-4 border-b hover:bg-accent transition-colors ${
                      selectedConversation?.id === conv.id ? 'bg-accent' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">
                          {conv.visitor_name || 'Anonymous'}
                        </span>
                      </div>
                      <Badge className={getStatusColor(conv.status)}>
                        {conv.status}
                      </Badge>
                    </div>
                    {conv.visitor_email && (
                      <p className="text-xs text-muted-foreground">{conv.visitor_email}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(conv.last_message_at).toLocaleString()}
                    </p>
                  </button>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {selectedConversation ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>
                        {selectedConversation.visitor_name || 'Anonymous'}
                      </CardTitle>
                      {selectedConversation.visitor_email && (
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.visitor_email}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateConversationStatus('resolved')}
                      >
                        Resolve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateConversationStatus('closed')}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-[calc(100vh-450px)]">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender_type === 'agent'
                              ? 'justify-end'
                              : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.sender_type === 'agent'
                                ? 'bg-primary text-primary-foreground'
                                : message.sender_type === 'system'
                                ? 'bg-muted text-muted-foreground text-sm italic'
                                : 'bg-accent text-accent-foreground'
                            }`}
                          >
                            {message.message_text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                          }
                        }}
                      />
                      <Button onClick={sendMessage} size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center text-muted-foreground">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a conversation to start chatting</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentDashboard;
