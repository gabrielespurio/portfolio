import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-lg text-blue-100 mb-12 leading-relaxed">
              Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia inovadora ou precisa de ajuda para escalar seu negócio, entre em contato.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="font-medium">gabrielespurio@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Telefone</p>
                  <p className="font-medium">(17) 99220-4822</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Localização</p>
                  <p className="font-medium">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-8 bg-white text-slate-900 border-none shadow-2xl rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome Completo</label>
                  <Input id="name" placeholder="Seu nome" className="bg-slate-50 border-slate-200 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="bg-slate-50 border-slate-200 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensagem</label>
                  <Textarea id="message" placeholder="Como posso ajudar?" className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-primary" />
                </div>

                <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-6 text-center text-blue-200 text-sm border-t border-white/10 mt-12">
        <p>© {new Date().getFullYear()} Gabriel Espurio. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
