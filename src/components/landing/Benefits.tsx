import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

const stats = [
  { value: "15+ שעות", caption: "חיסכון שבועי בניהול ידני" },
  { value: "40%", caption: "שיפור פרודוקטיביות בממוצע" },
  { value: "Enterprise-grade", caption: "אבטחה והפרדת tenants" },
  { value: "Realtime", caption: "שיתוף פעולה לצוותים" },
] as const;

export function Benefits() {
  return (
    <MotionSection className="py-14 sm:py-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              למה ארגונים בוחרים ב-Syncore?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Syncore מרכזת ניהול, תהליכים ונתונים במקום אחד ומוסיפה אוטומציה חכמה שמאפשרת לצוות לעבוד מהר יותר ובדיוק גבוה יותר.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <li className="rounded-xl border border-border bg-background px-4 py-3">
                ריכוזיות - כל מה שצריך במקום אחד
              </li>
              <li className="rounded-xl border border-border bg-background px-4 py-3">
                התאמה לצוותים קטנים וארגונים מרובי יחידות
              </li>
              <li className="rounded-xl border border-border bg-background px-4 py-3">
                תהליכים מדידים עם דוחות ואנליטיקס
              </li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.caption}
                className="rounded-2xl border border-border bg-muted p-6"
              >
                <div className="text-xl font-semibold text-dark sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">
                  {s.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
