import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { Bot, Workflow, KanbanSquare, Users } from "lucide-react";

const features = [
  {
    title: "עוזר AI חכם",
    description:
      "בינה מלאכותית שיוצרת משימות, מנתחת פרויקטים, מייצרת דוחות ומשפרת תהליכים באופן אוטומטי.",
    Icon: Bot,
  },
  {
    title: "ניהול פרויקטים מתקדם",
    description:
      "מעקב בזמן אמת אחר פרויקטים מרובים, משימות, צוותים וטיימליינים במקום אחד.",
    Icon: KanbanSquare,
  },
  {
    title: "CRM וניהול לידים",
    description:
      "ניהול לידים ולקוחות, מעקב אחר pipeline המכירות, ותיעוד אינטראקציות עם timeline אחיד.",
    Icon: Users,
  },
  {
    title: "אוטומציות חכמות",
    description:
      "זרימות עבודה אוטומטיות, תזכורות, עדכונים וניתוחים ללא עבודה ידנית.",
    Icon: Workflow,
  },
] as const;

export function Features() {
  return (
    <MotionSection id="features" className="py-14 sm:py-18">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              פיצ’רים מרכזיים
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              כל מה שצריך כדי לנהל את הארגון במקום אחד, עם שכבת AI שמייצרת ערך בכל פעולה.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
