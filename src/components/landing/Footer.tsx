import { Container } from "@/components/landing/Container";

const productLinks = [
  { label: "פיצ'רים", href: "#features" },
  { label: "תמחור", href: "#pricing" },
  { label: "הדגמה", href: "#contact" },
  { label: "עדכונים", href: "#" },
] as const;

const companyLinks = [
  { label: "אודות", href: "#" },
  { label: "קריירה", href: "#" },
  { label: "בלוג", href: "#" },
  { label: "צור קשר", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-dark">Syncore</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              מערכות ארגוניות חכמות שעובדות בשבילך
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark">מוצר</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark">חברה</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark">דומיין</h3>
            <p className="mt-4 text-sm text-muted-foreground">syncore.co.il</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Syncore. כל הזכויות שמורות.</p>
          <p>נבנה עבור עסקים בישראל.</p>
        </div>
      </Container>
    </footer>
  );
}
