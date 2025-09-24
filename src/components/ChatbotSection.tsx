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
      question: "What is Galaxy AI?",
      answer: "Galaxy AI is Samsung's intelligent assistant that helps with translation, image editing, note summarization, and productivity tools across Galaxy devices. It's designed to make your daily tasks easier and more intuitive."
    },
    {
      question: "How can I buy a Galaxy Z Fold7 online?",
      answer: "You can purchase the Galaxy Z Fold7 directly on our website by clicking 'Buy Now' on the product page. We offer secure payment options, fast shipping, and financing plans."
    },
    {
      question: "Do Samsung devices come with warranty?",
      answer: "Yes. All Samsung products include a 2-year manufacturer warranty covering manufacturing defects. Extended warranty and Samsung Care+ options are also available at checkout."
    },
    {
      question: "How can I track my order?",
      answer: "To track your order: Go to My Account > Orders, Enter your order number and email, View live shipping updates. You'll also receive tracking emails once your order ships."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept: Credit/Debit Cards (Visa, MasterCard, American Express), PayPal, Samsung Financing options, Local bank transfers (where available)."
    },
    {
      question: "How do I connect my Galaxy Watch to my phone?",
      answer: "To pair your Galaxy Watch: Install the Samsung Wearable App on your phone, Turn on your Galaxy Watch, Open the app and select your watch, Follow the on-screen pairing instructions."
    },
    {
      question: "Can I return a product if I'm not satisfied?",
      answer: "Yes. You can return products within 14 days of delivery as long as they are in original condition and packaging. Refunds will be issued to your original payment method."
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to the most common questions or chat with our AI assistant
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
                  Didn't find your answer?
                </h3>
                <p className="text-muted-foreground">
                  Chat with our AI assistant for personalized help
                </p>
              </div>
              
              <Button
                onClick={() => setShowChat(!showChat)}
                className="mb-4"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {showChat ? 'Close Chat' : 'Start Conversation'}
                {showChat ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>

              {showChat && (
                <div className="bg-muted/50 rounded-xl p-4 animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-4">
                    🤖 <strong>Samsung AI Assistant:</strong> Hello! I'm your virtual assistant. 
                    How can I help you today? Use the chat widget in the bottom-right corner 
                    of the screen for a complete experience.
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