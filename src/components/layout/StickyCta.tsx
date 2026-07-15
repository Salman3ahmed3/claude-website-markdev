"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Mobile-only sticky conversion bar — appears after the user scrolls past the hero. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border glass p-3 transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <Link
        href="/contact"
        tabIndex={show ? 0 : -1}
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-brand-contrast shadow-[var(--shadow-brand)]"
      >
        Book a free discovery call
        <Icon name="arrow-right" size={18} />
      </Link>
    </div>
  );
}
