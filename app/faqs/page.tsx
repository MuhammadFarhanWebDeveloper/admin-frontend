"use client";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "You can return most new, unopened items within 30 days of delivery for a full refund. For more details, please check our return policy page.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After your order ships, you will receive a tracking number via email. You can track your order using that number on our tracking page.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to a number of countries worldwide. You can see the list of supported countries during checkout.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can only be modified or canceled within a short period after they are placed. Please contact our customer support team for assistance.",
  },
];

export default function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
