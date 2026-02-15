import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { Building2, BriefcaseBusiness, Rocket } from "lucide-react";

const cases = [
  {
    title: "סטארטאפים",
    description: "ניהול זריז של פרויקטים ולקוחות, סדרי עדיפויות ברורים ושקיפות לכל הצוות.",
    Icon: Rocket,
  },
  {
    title: "סוכנויות ויועצים",
    description: "מעקב אחר לקוחות מרובים, פרויקטים במקביל ותיעוד פעילות לאורך זמן.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "ארגונים גדולים",
    description: "ניהול מורכב עם צוותים וסניפים, הרשאות, תהליכים ואנליטיקה מרכזית.",
    Icon: Building2,
  },
] as const;

export function UseCases() {
  return (
    <MotionSection className="py-14 sm:py-18">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
          תרחישי שימוש
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          פתרון שמותאם לסוגי ארגונים שונים, עם תבניות ותהליכים מוכנים.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cases.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-muted p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-dark">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
              <div className="mt-4 h-24 rounded-xl border border-border bg-background" />
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
