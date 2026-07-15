"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border glass"
          : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-brand-contrast"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]"
      >
        <Link href="/" aria-label="MarkDev home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.map((item) => {
            const active =
              item.href &&
              (item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href));
            if (!item.children) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    className={cn(
                      "inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-brand",
                      active ? "text-brand" : "text-muted-strong",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label} className="group relative">
                <button
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-muted-strong transition-colors hover:bg-surface-2 hover:text-brand group-focus-within:text-brand",
                  )}
                  aria-haspopup="true"
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </button>
                <div
                  className={cn(
                    "invisible absolute left-1/2 top-full w-[min(30rem,90vw)] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200",
                    "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                    item.label === "Services" && "w-[min(46rem,92vw)]",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-lg)]">
                    <div
                      className={cn(
                        "grid gap-1",
                        item.label === "Services" ? "grid-cols-2" : "grid-cols-1",
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-2"
                        >
                          <span className="mt-1 text-brand opacity-0 transition-opacity group-hover/item:opacity-100">
                            <Icon name="arrow-right" size={16} />
                          </span>
                          <span className="-ml-6 group-hover/item:ml-0 transition-all">
                            <span className="block text-sm font-medium text-foreground">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-muted">
                                {child.description}
                              </span>
                            )}
                          </span>
                        </Link>
                      ))}
                    </div>
                    {item.label === "Services" && (
                      <Link
                        href="/services"
                        className="mt-1 flex items-center justify-between rounded-xl bg-surface px-3 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-surface-2"
                      >
                        View all services
                        <Icon name="arrow-right" size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button href="/contact" size="sm" className="hidden lg:inline-flex" withArrow>
            Book a call
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-6 pb-24">
            {PRIMARY_NAV.map((item) => (
              <div key={item.label} className="border-b border-border py-2">
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="py-2 text-xs font-mono uppercase tracking-wider text-muted">
                      {item.label}
                    </div>
                    <div className="grid gap-1 pb-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between rounded-lg px-2 py-2.5 text-base hover:bg-surface-2"
                        >
                          {child.label}
                          <Icon name="arrow-up-right" size={16} className="text-muted" />
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <Button href="/contact" size="lg" className="flex-1" withArrow>
                Book a call
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
