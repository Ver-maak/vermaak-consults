import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${index}`}
          className="border-border"
        >
          <AccordionTrigger className="text-left font-display text-base font-bold hover:text-primary hover:no-underline sm:text-lg">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
