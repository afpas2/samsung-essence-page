import React, { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ChatbotSection = () => {
  const [showChat, setShowChat] = useState(false);

  const faqs = [
    {
      question: "Quais são os recursos do Galaxy AI?",
      answer: "O Galaxy AI oferece recursos avançados como tradução instantânea, assistente de escrita, edição inteligente de fotos e muito mais para revolucionar sua experiência mobile."
    },
    {
      question: "Como funciona a garantia dos produtos Samsung?",
      answer: "Todos os produtos Samsung vêm com garantia oficial de 1 ano. Oferecemos suporte técnico completo e rede de assistência técnica autorizada em todo o Brasil."
    },
    {
      question: "Posso trocar meu produto por um modelo mais recente?",
      answer: "Sim! Temos programas de trade-in que permitem trocar seu dispositivo atual por crédito na compra de um novo produto Samsung."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartão de crédito, débito, PIX, boleto bancário e parcelamento em até 12x sem juros para produtos selecionados."
    },
    {
      question: "Como acompanhar meu pedido?",
      answer: "Você pode acompanhar seu pedido através da área do cliente no site ou pelo e-mail de confirmação com o código de rastreamento."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-accent" />
          </div>
          <h2 className="section-title text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas rápidas para as dúvidas mais comuns ou converse com nosso assistente AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="mb-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-card-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-card-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Chat Toggle */}
          <div className="text-center">
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Não encontrou sua resposta?
                </h3>
                <p className="text-muted-foreground">
                  Converse com nosso assistente AI para obter ajuda personalizada
                </p>
              </div>
              
              <Button
                onClick={() => setShowChat(!showChat)}
                className="mb-4"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {showChat ? 'Fechar Chat' : 'Iniciar Conversa'}
                {showChat ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>

              {showChat && (
                <div className="bg-muted/50 rounded-xl p-4 animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-4">
                    🤖 <strong>Assistente Samsung:</strong> Olá! Sou seu assistente virtual. 
                    Como posso ajudá-lo hoje? Use o widget de chat no canto inferior direito 
                    da tela para uma experiência completa.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Powered by Retell AI • Agent ID: agent_f5e2acc18f6b1d82dcdcf211f3</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;