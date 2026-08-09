import CTAButton from "../components/CTAButton";
import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Testimonials
        </h1>
        <ul className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
          {testimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              transition={testimonial.transition}
            />
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center sm:mt-16">
        <CTAButton />
      </div>
    </section>
  );
};

export default Testimonials;
