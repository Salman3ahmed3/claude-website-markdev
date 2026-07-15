import { PROCESS } from "@/lib/data/process";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function ProcessTimeline() {
  return (
    <ol className="relative flex flex-col gap-4">
      {PROCESS.map((phase, i) => (
        <Reveal as="li" key={phase.number} delay={i * 70}>
          <div className="group relative grid gap-6 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40 sm:grid-cols-[auto_1fr] sm:p-8">
            <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:gap-2">
              <span
                className="text-4xl font-bold text-muted transition-colors group-hover:text-brand sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {phase.number}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold sm:text-2xl">{phase.title}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted-strong">
                  <Icon name="clock" size={13} />
                  {phase.duration}
                </span>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted">{phase.summary}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {phase.activities.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="flex items-start gap-2 rounded-xl bg-surface px-4 py-3 text-sm">
                <Icon name="sparkles" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-muted-strong">
                  <span className="font-medium text-foreground">You get: </span>
                  {phase.deliverable}
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
