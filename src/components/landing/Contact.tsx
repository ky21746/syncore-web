"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/landing/Container";
import { MotionSection } from "@/components/landing/MotionSection";

const schema = z.object({
  name: z.string().min(2, "נא להזין שם"),
  email: z.string().email("נא להזין אימייל תקין"),
  message: z.string().min(10, "נא להזין הודעה קצרה יותר מפורטת"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const defaultValues = useMemo<FormValues>(
    () => ({ name: "", email: "", message: "" }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = async () => {
    alert("נשלח! נחזור אליך בהקדם.");
    reset(defaultValues);
  };

  return (
    <MotionSection id="contact" className="py-14 sm:py-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              מוכן לשפר את הארגון שלך?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              הצטרף לארגונים שכבר חוסכים זמן ומשפרים תהליכים עם Syncore.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">תמיכה מלאה בעברית</p>
          </div>

          <form
            aria-label="טופס יצירת קשר"
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-dark">
                  שם
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-dark shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-dark">
                  אימייל
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-dark shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-dark">
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-dark shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-red-600">{errors.message.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {isSubmitting ? "שולח..." : "שלח"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </MotionSection>
  );
}
