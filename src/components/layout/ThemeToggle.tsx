"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("markdev-theme", next);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-strong transition-colors hover:border-brand hover:text-brand ${className ?? ""}`}
    >
      {mounted && theme === "dark" ? (
        <Icon name="sun" size={18} />
      ) : (
        <Icon name="moon" size={18} />
      )}
    </button>
  );
}
