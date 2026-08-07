import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Testimonials
        </h2>
        <ul className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="border-l-2 border-sage pl-6 sm:pl-8"
            >
              <blockquote className="text-left text-lg leading-relaxed text-charcoal sm:text-xl">
                {testimonial.quote}
              </blockquote>
              <p className="mt-4 font-semibold text-sage-deep">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted">{testimonial.transition}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
