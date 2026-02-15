import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

const logos = ["Company A", "Company B", "Company C", "Company D"] as const;

export function SocialProof() {
  return (
    <MotionSection className="py-14 sm:py-18">
      <Container>
        <h2 className="text-xl font-semibold tracking-tight text-dark sm:text-2xl">
          מהימן על ידי ארגונים מובילים בישראל
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((l) => (
            <div
              key={l}
              className="flex h-14 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold text-muted-foreground"
            >
              {l}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <figure className="rounded-2xl border border-border bg-muted p-6">
            <blockquote className="text-sm leading-7 text-muted-foreground">
              "הצלחנו לצמצם משמעותית עבודה ידנית ולהגיע לשקיפות מלאה בניהול הפרויקטים."
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-dark">
              מנהל/ת תפעול, חברה טכנולוגית
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-border bg-muted p-6">
            <blockquote className="text-sm leading-7 text-muted-foreground">
              "ה-AI מסכם לנו סטטוסים ומוציא דוחות במהירות. זה משנה את קצב העבודה של הצוות."
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-dark">
              מנהל/ת פרויקטים, שירותים מקצועיים
            </figcaption>
          </figure>
        </div>
      </Container>
    </MotionSection>
  );
}
