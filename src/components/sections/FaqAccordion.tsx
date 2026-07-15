"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/lib/data/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-background">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              >
                <span className="text-base font-medium sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-strong transition-all duration-200 ${
                    isOpen ? "rotate-45 border-brand text-brand" : ""
                  }`}
                >
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-[0.975rem] leading-relaxed text-muted sm:px-7 sm:pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
