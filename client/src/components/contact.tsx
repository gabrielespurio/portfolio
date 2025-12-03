import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, MessageSquare, X, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: ""
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleStartChat = () => {
    setIsChatOpen(true);
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{
        id: 1,
        text: "Olá! Sou o assistente virtual do Gabriel. Qual é o seu nome?",
        sender: 'bot'
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { id: Date.now(), text: inputValue, sender: 'user' } as Message
    ];
    setMessages(newMessages);
    const userInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Process next step
    setTimeout(() => {
      let botResponse = "";
      
      if (currentStep === 0) {
        setFormData(prev => ({ ...prev, name: userInput }));
        botResponse = `Prazer, ${userInput}! Qual é o seu telefone ou WhatsApp para contato?`;
        setCurrentStep(1);
      } else if (currentStep === 1) {
        setFormData(prev => ({ ...prev, phone: userInput }));
        botResponse = "Obrigado! E o que você está desejando desenvolver hoje? Me conte um pouco sobre sua ideia.";
        setCurrentStep(2);
      } else if (currentStep === 2) {
        setFormData(prev => ({ ...prev, description: userInput }));
        botResponse = "Perfeito! Recebi suas informações e o Gabriel analisará seu projeto e entrará em contato em breve. Obrigado!";
        setCurrentStep(3);
      }

      if (botResponse) {
        setMessages(prev => [
          ...prev,
          { id: Date.now() + 1, text: botResponse, sender: 'bot' }
        ]);
      }
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-[#0f1035] text-white relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia inovadora ou precisa de ajuda para escalar seu negócio, entre em contato.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">gabrielespurio@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">(17) 99220-4822</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isChatOpen ? (
                <motion.div
                  key="start-button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full"
                >
                  <Card className="p-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-3xl flex flex-col items-center text-center hover:border-primary/30 transition-colors group cursor-pointer max-w-sm mx-auto" onClick={handleStartChat}>
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <MessageSquare className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Assistente Virtual</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Clique abaixo para iniciar uma conversa interativa e me contar sobre seu projeto.
                    </p>
                    <Button 
                      onClick={handleStartChat}
                      className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all rounded-full w-full"
                    >
                      Quero entrar em contato
                    </Button>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="chat-interface"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full max-w-sm mx-auto h-[450px] relative"
                >
                  <Card className="w-full h-full bg-[#0f1035]/90 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                          <Bot className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm">Assistente Virtual</h3>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs text-green-500 font-medium">Online</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsChatOpen(false)}
                        className="hover:bg-white/10 text-white/70 hover:text-white rounded-full h-8 w-8"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] p-4 rounded-2xl ${
                            msg.sender === 'user' 
                              ? 'bg-primary text-white rounded-tr-none' 
                              : 'bg-white/10 text-white border border-white/5 rounded-tl-none'
                          }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                          </div>
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start w-full"
                        >
                          <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5 items-center h-12">
                            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                          </div>
                        </motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-white/10 bg-white/5">
                      <form 
                        onSubmit={handleSendMessage}
                        className="flex items-center gap-2 relative"
                      >
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder={currentStep === 3 ? "Conversa finalizada" : "Digite sua resposta..."}
                          disabled={currentStep === 3 || isTyping}
                          className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-white/30 pr-12 h-12 rounded-full"
                        />
                        <Button 
                          type="submit" 
                          size="icon"
                          disabled={!inputValue.trim() || currentStep === 3 || isTyping}
                          className="absolute right-1 top-1 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 transition-all"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </form>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-6 text-center text-muted-foreground text-sm border-t border-white/10 mt-12">
        <p>© {new Date().getFullYear()} Gabriel Espurio. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
