import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is a favicon and why do I need it?",
      answer: "A favicon is a small icon that appears in browser tabs, bookmarks, and address bars. It helps users identify your website quickly and adds a professional touch to your brand. Having a favicon improves user experience and makes your site more memorable."
    },
    {
      question: "Can I generate a favicon from text or emoji?",
      answer: "Yes! Our Favicon Generator Tool supports three methods: you can create favicons from custom text with various fonts and colors, choose from hundreds of categorized emojis, or upload your own image. All three methods produce professional-quality favicons instantly."
    },
    {
      question: "Is this favicon generator tool free to use?",
      answer: "Absolutely! Our Favicon Generator Tool is 100% free with no hidden costs, subscriptions, or signup requirements. You can generate and download as many favicons as you need without any limitations."
    },
    {
      question: "What file formats does the Favicon Generator support?",
      answer: "The Favicon Generator Tool supports three popular formats: ICO (the standard favicon format for all browsers), PNG (high-quality with transparency), and SVG (scalable vector format for modern browsers). You can download your favicon in any or all of these formats."
    },
    {
      question: "How do I add the generated favicon to my website?",
      answer: "After downloading your favicon, upload it to your website's root directory. Then add this code to your HTML <head> section: <link rel='icon' type='image/png' href='/favicon.png'>. For ICO format, use: <link rel='icon' type='image/x-icon' href='/favicon.ico'>"
    },
    {
      question: "What sizes should I use for my favicon?",
      answer: "We generate favicons in multiple sizes (16x16, 32x32, 48x48, 64x64, and 128x128 pixels) to ensure compatibility across all devices and platforms. Modern browsers typically use 32x32, while mobile devices may use larger sizes for shortcuts and bookmarks."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 px-4 gradient-hero" itemScope itemType="https://schema.org/FAQPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about creating favicons
          </p>
        </header>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 shadow-soft"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                <span itemProp="name">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground leading-relaxed"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
