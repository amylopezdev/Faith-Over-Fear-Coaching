import CTAButton from "./components/CTAButton";

const NotFound = () => {
  return (
    <section className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 px-6 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-center text-muted">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8 text-center sm:mt-10">
          <CTAButton text="Back to home" href="/" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
