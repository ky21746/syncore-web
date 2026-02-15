import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

export function FinalCTA() {
  return (
    <MotionSection className="py-14 sm:py-18">
      <Container>
        <div className="rounded-3xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(30,41,59,0.12),transparent_50%)] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
                מוכן לשפר את הארגון שלך?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                הצטרף לארגונים שכבר חוסכים זמן ומשפרים תהליכים עם Syncore
              </p>
              <p className="mt-6 text-sm text-muted-foreground">תמיכה מלאה בעברית</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                הזמן הדגמה אישית
              </a>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
