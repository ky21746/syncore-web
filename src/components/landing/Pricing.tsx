import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

type Tier = {
  name: string;
  price: string;
  badge?: string;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "₪0/חודש",
    features: ["עד 3 פרויקטים פעילים", "עד 2 משתמשים", "פיצ'רים בסיסיים", "תמיכה קהילתית"],
    cta: "התחל חינם",
  },
  {
    name: "Pro",
    price: "₪299/חודש",
    badge: "הכי פופולרי",
    features: [
      "פרויקטים ללא הגבלה",
      "עד 10 משתמשים",
      "AI Assistant מלא",
      "CRM מתקדם",
      "דוחות ואנליטיקס",
      "תמיכה מועדפת",
    ],
    cta: "נסה 14 יום חינם",
  },
  {
    name: "Enterprise",
    price: "מחיר מותאם",
    features: [
      "כל הפיצ'רים של Pro",
      "משתמשים ללא הגבלה",
      "SSO ואבטחה מתקדמת",
      "API ואינטגרציות",
      "תמיכה ייעודית 24/7",
      "הדרכה ו-onboarding",
    ],
    cta: "צור קשר",
  },
];

export function Pricing() {
  return (
    <MotionSection id="pricing" className="py-14 sm:py-18">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
          תמחור שקוף ופשוט
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          בחר את התוכנית שמתאימה לך היום, ושנה בכל רגע.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => {
            const isPro = t.name === "Pro";
            return (
              <section
                key={t.name}
                aria-label={`תוכנית ${t.name}`}
                className={
                  "relative rounded-2xl border p-6 shadow-sm " +
                  (isPro
                    ? "border-primary bg-background"
                    : "border-border bg-background")
                }
              >
                {t.badge ? (
                  <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {t.badge}
                  </div>
                ) : null}
                <h3 className="text-base font-semibold text-dark">{t.name}</h3>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-dark">
                  {t.price}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={
                    "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
                    (isPro
                      ? "bg-primary text-primary-foreground hover:opacity-95"
                      : "border border-border bg-background text-dark hover:bg-muted")
                  }
                >
                  {t.cta}
                </a>
              </section>
            );
          })}
        </div>
      </Container>
    </MotionSection>
  );
}
