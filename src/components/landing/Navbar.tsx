import { Container } from "@/components/landing/Container";

const links = [
  { href: "#features", label: "פיצ’רים" },
  { href: "#pricing", label: "תמחור" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "צור קשר" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav aria-label="ניווט ראשי" className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="font-semibold tracking-tight text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Syncore
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              התחל עכשיו בחינם
            </a>
          </div>
        </nav>

        <nav aria-label="ניווט משני" className="flex gap-4 pb-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
