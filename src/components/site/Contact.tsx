import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const email = fd.get("email");
    const message = fd.get("message");
    const text = `Hello Perl Contractors,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0A${message}`;
    setTimeout(() => {
      window.open(`https://wa.me/254719546875?text=${text}`, "_blank");
      toast.success("Opening WhatsApp to send your message…");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <section id="contact" className="relative bg-card py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Let's discuss your next build.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out for a quote, a site visit or a quick consultation. We're
              available across Kiambu, Nairobi and beyond.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Ruiru, near PCEA Mukuyu Church, Kiambu County",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "0748 085 743 / 0719 546 875",
                  href: "tel:+254748085743",
                },
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "perlcontractors@gmail.com",
                  href: "mailto:perlcontractors@gmail.com",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon – Sun · 8:00 AM – 6:00 PM",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-foreground hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-border">
              <iframe
                title="Perl Contractors location — Ruiru"
                src="https://www.google.com/maps?q=PCEA+Mukuyu+Church+Ruiru&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-5 border border-border bg-background p-8 md:p-10 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <Input name="name" required placeholder="John Doe" className="h-12" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone
                </label>
                <Input name="phone" required placeholder="07xx xxx xxx" className="h-12" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <Input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Details
              </label>
              <Textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project — scope, location, timeline…"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
              {sending ? "Sending…" : (
                <>
                  Send Message <Send className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Your message opens in WhatsApp for fastest response.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
