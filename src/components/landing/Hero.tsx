import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

export function Hero() {
  return (
    <MotionSection className="pt-14 pb-10 sm:pt-20 sm:pb-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              AI-powered business systems
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-dark sm:text-5xl">
              Syncore - מערכות ארגוניות חכמות שעובדות בשבילך
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              פלטפורמה מבוססת AI לניהול פרויקטים, משימות, לקוחות ותהליכים עסקיים.
              אוטומציה חכמה שחוסכת זמן ומגדילה יעילות.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                הזמן הדגמה אישית
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background p-4">
                <dt className="text-xs text-muted-foreground">הטמעה מהירה</dt>
                <dd className="mt-1 text-sm font-semibold text-dark">תוך דקות</dd>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <dt className="text-xs text-muted-foreground">אבטחה</dt>
                <dd className="mt-1 text-sm font-semibold text-dark">הפרדת tenants מלאה</dd>
              </div>
            </dl>
          </div>

          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(30,41,59,0.16),transparent_50%)]" />
            <div className="rounded-2xl border border-border bg-background shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Syncore Dashboard</div>
              </div>
              <div className="p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-muted p-4">
                    <div className="h-2 w-24 rounded bg-border" />
                    <div className="mt-3 h-7 w-16 rounded bg-primary/20" />
                    <div className="mt-4 h-2 w-28 rounded bg-border" />
                    <div className="mt-2 h-2 w-20 rounded bg-border" />
                  </div>
                  <div className="rounded-xl border border-border bg-muted p-4">
                    <div className="h-2 w-28 rounded bg-border" />
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded bg-border" />
                      <div className="h-2 w-10/12 rounded bg-border" />
                      <div className="h-2 w-8/12 rounded bg-border" />
                    </div>
                    <div className="mt-4 h-9 w-full rounded bg-background" />
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-32 rounded bg-border" />
                    <div className="h-2 w-12 rounded bg-border" />
                  </div>
                  <div className="mt-4 grid grid-cols-6 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={
                          "h-10 rounded-lg border border-border " +
                          (i % 3 === 0 ? "bg-primary/10" : "bg-muted")
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
