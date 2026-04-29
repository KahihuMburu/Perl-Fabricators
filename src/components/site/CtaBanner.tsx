import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import welding from "@/assets/project-welding.jpg";

export const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={welding}
        alt="Welder at work creating sparks"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-jet/80" />
      <div className="container-px relative mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Let's Build Together
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl text-balance">
            Have a project <span className="text-primary">in mind?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
            Tell us about your build. We'll respond with timelines, scope and a
            transparent quote — usually within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+254748085743">
                <Phone className="mr-1 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a
                href="https://wa.me/254719546875?text=Hello%20Perl%20Contractors%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1 h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
