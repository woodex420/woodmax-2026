import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Paperclip, Phone, Video, Clock, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChatWidget } from '@/hooks/useChatWidget';
import { cn } from '@/lib/utils';

export const ChatWidget = () => {
  const {
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
  } = useChatWidget();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showActions, setShowActions] = useState(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      setShowActions(false);
    }
  }, [messages]);

  const handleOpen = async () => {
    setIsOpen(true);
    if (!conversation) {
      await startConversation();
    }
  };

  const handleSend = async () => {
    if (inputMessage.trim()) {
      await sendMessage(inputMessage);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const actions = [
    { icon: '💬', label: 'Ask about this product', value: 'product' },
    { icon: '📄', label: 'Get a quote', value: 'quote' },
    { icon: '📅', label: 'Schedule showroom visit', value: 'showroom' },
    { icon: '🆘', label: 'Live support', value: 'support' },
    { icon: '📞', label: 'Request callback', value: 'callback' },
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] shadow-2xl z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-primary-foreground text-primary rounded-full p-2 mt-1">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">WoodEx Support</h3>
            <p className="text-sm opacity-90">Typically replies in minutes</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-primary-foreground hover:bg-primary-foreground/20 -mt-1"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {showActions && messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">How can we help you today?</p>
            {actions.map((action) => (
              <button
                key={action.value}
                onClick={() => handleAction(action.value)}
                className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent transition-colors flex items-center gap-3"
              >
                <span className="text-xl">{action.icon}</span>
                <span className="text-sm">{action.label}</span>
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.sender_type === 'visitor' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'max-w-[80%] rounded-lg p-3',
                  message.sender_type === 'visitor'
                    ? 'bg-primary text-primary-foreground'
                    : message.sender_type === 'system'
                    ? 'bg-muted text-muted-foreground text-sm italic'
                    : 'bg-accent text-accent-foreground'
                )}
              >
                <div className="flex items-start gap-2">
                  {message.sender_type === 'agent' && (
                    <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                  )}
                  <div>{message.message_text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            disabled={!inputMessage.trim() || isLoading}
            size="icon"
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Phone className="h-3 w-3" />
            Call Us
          </button>
          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Video className="h-3 w-3" />
            Video Call
          </button>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            9 AM - 6 PM
          </div>
        </div>
      </div>
    </Card>
  );
};
