import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <section
      id="top"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-4xl font-medium text-charcoal sm:text-6xl md:text-7xl">
          Faith Over Fear Coaching
        </h1>
        <p className="font-script mt-4 text-center text-2xl text-[color-mix(in_srgb,var(--color-sage-deep)_70%,var(--color-charcoal)_30%)] sm:mt-6 sm:text-3xl">
          Helping you advance your career with faith over fear
        </p>
        <div className="mt-8 text-center sm:mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
