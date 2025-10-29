import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="space-y-10" id="resources">
      <SectionHeading
        eyebrow="Outcomes"
        title="Trusted by teams building their next market advantage."
        description="From seed-stage rocket ships to enterprise innovators, our partners deliver outcomes with teams sourced through Novawork."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950/40 to-slate-900/70 p-6"
          >
            <Quote className="h-10 w-10 text-emerald-300" />
            <blockquote className="text-sm text-slate-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                <Image
                  fill
                  sizes="48px"
                  className="object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">
                  {testimonial.author}
                </span>
                <span className="text-xs text-slate-400">{testimonial.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
