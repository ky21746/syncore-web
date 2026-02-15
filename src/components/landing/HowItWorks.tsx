import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

const steps = [
  {
    title: "הירשם תוך דקה",
    description: "יצירת סביבת עבודה מאובטחת והגדרות בסיסיות בזריזות.",
  },
  {
    title: "הוסף את הצוות והפרויקטים שלך",
    description: "ייבוא נתונים, הגדרת תהליכים ושיוך משימות לכל בעלי העניין.",
  },
  {
    title: "תן ל-AI לעבוד בשבילך",
    description: "אוטומציות, סיכומים ודוחות שנוצרים מתוך הפעילות השוטפת.",
  },
] as const;

export function HowItWorks() {
  return (
    <MotionSection className="py-14 sm:py-18">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
          איך זה עובד
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          התחלה מהירה, תהליך ברור, וערך שנבנה על בסיס הנתונים שלך.
        </p>

        <ol className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {idx + 1}
                </div>
                <h3 className="text-base font-semibold text-dark">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </MotionSection>
  );
}
