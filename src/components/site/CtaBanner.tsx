import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import welding from "@/assets/project-welding.jpg";

export const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img src={welding} alt="Welder at work" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/80" />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <div className="uppercase text-sky-400 text-sm font-semibold tracking-widest mb-4">LET'S BUILD TOGETHER</div>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
          Tell us about your build. We respond with timelines, scope, and transparent quote — usually within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" className="bg-sky-600 hover:bg-sky-500" asChild>
            <a href="tel:+254748085743"><Phone className="mr-2" /> Call Now</a>
          </Button>
          <Button variant="outline" size="xl" className="border-slate-400 text-white hover:bg-white/10" asChild>
            <a href="https://wa.me/254719546875?text=Hello%20Perl%20Contractors" target="_blank">
              <MessageCircle className="mr-2" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};