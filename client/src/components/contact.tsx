import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-[#0f1035] text-white relative overflow-hidden">
       {/* Decorative circles - updated for dark theme */}
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

          <div>
            <Card className="p-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</label>
                  <Input id="name" placeholder="Seu nome" className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-white/30" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-white/30" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem</label>
                  <Textarea id="message" placeholder="Como posso ajudar?" className="min-h-[120px] bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-white/30" />
                </div>

                <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
