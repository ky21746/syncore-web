import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

const items = [
  {
    q: "האם צריך כרטיס אשראי לתקופת הניסיון?",
    a: "לא. אפשר להתחיל ולהתנסות בלי כרטיס אשראי.",
  },
  {
    q: "כמה זמן לוקח להתחיל?",
    a: "בדרך כלל דקות ספורות. נרשמים, מזמינים משתמשים, ומתחילים לעבוד.",
  },
  {
    q: "האם הנתונים מאובטחים?",
    a: "כן. אבטחת מידע ברמה ארגונית והפרדת tenants מלאה.",
  },
  {
    q: "אפשר לשנות תוכנית בכל רגע?",
    a: "כן. אפשר לשדרג, לשנמך או לעבור לתוכנית Enterprise בכל עת.",
  },
  {
    q: "יש תמיכה בעברית?",
    a: "כן. תמיכה מלאה בעברית, כולל ליווי בתהליך ההטמעה לפי צורך.",
  },
] as const;

export function FAQ() {
  return (
    <MotionSection id="faq" className="py-14 sm:py-18">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
          שאלות נפוצות
        </h2>

        <div className="mt-8 space-y-3">
          {items.map((it) => (
            <details
              key={it.q}
              className="group rounded-2xl border border-border bg-background p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span>{it.q}</span>
                <span aria-hidden="true" className="float-left text-muted-foreground group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
