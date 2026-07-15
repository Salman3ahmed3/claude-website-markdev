import { TESTIMONIALS, type Testimonial } from "@/lib/data/testimonials";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          className={i < rating ? "fill-brand" : "fill-none text-border-strong"}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full break-inside-avoid flex-col gap-5 rounded-2xl border border-border bg-background p-6 card-hairline",
        className,
      )}
    >
      <Stars rating={testimonial.rating} />
      <blockquote className="flex-1 text-[0.975rem] leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-sm font-semibold text-white">
          {testimonial.initials}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold">{testimonial.author}</span>
          <span className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({
  items = TESTIMONIALS,
  columns = 3,
}: {
  items?: Testimonial[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "gap-5 [column-fill:_balance] sm:columns-2",
        columns === 3 ? "lg:columns-3" : "lg:columns-2",
      )}
    >
      {items.map((t, i) => (
        <Reveal key={t.author} delay={(i % 3) * 80} className="mb-5 block">
          <TestimonialCard testimonial={t} />
        </Reveal>
      ))}
    </div>
  );
}
