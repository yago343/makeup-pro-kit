import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I receive the kit?",
      answer: "It's 100% digital and delivered instantly to your email after purchase. You'll get immediate access to download all materials."
    },
    {
      question: "Can I use this for both online and in-person courses?",
      answer: "Yes! The kit is fully adaptable to both formats. All materials can be printed for in-person classes or shared digitally for online courses."
    },
    {
      question: "How do I edit the files?",
      answer: "Easily with Canva — free and simple to use. All templates are designed in Canva format, so you can customize colors, text, and branding without any design experience."
    },
    {
      question: "What if I'm not satisfied with the kit?",
      answer: "We offer a 7-day unconditional money-back guarantee. If you're not completely satisfied, contact us for a full refund, no questions asked."
    },
    {
      question: "Can I use this kit for different types of makeup courses?",
      answer: "Absolutely! The kit is designed to be versatile and can be adapted for bridal makeup, special effects, basic makeup courses, and more."
    },
    {
      question: "Do I need any special software to use the materials?",
      answer: "No special software required! Everything works with free tools like Canva for editing and standard PDF readers for viewing."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about the Professional Makeup Artist Booklet Kit
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border border-rose-blush/20 rounded-lg px-6 shadow-card"
            >
              <AccordionTrigger className="text-left hover:text-warm-brown font-semibold text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;