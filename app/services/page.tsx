import CTAButton from "../components/CTAButton";

const Services = () => {
  return (
    <section
      id="services"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Services
        </h1>
        <div className="mt-8 text-center sm:mt-10">
          <p className="font-heading text-xl text-charcoal sm:text-2xl">
            Ready to get started?
          </p>
          <div className="mt-4">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
