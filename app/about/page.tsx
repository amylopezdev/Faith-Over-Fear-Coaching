import { aboutContent } from "../data/about";

const PhotoPlaceholder = ({ label }: { label: string }) => (
  <div
    role="img"
    aria-label={`${label} — photo coming soon`}
    className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-sage/25 bg-gradient-to-br from-cream via-mint-tint to-cream shadow-sm"
  >
    <div className="flex flex-col items-center gap-3 px-6 text-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-10 w-10 text-sage/50 sm:h-12 sm:w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <circle cx="24" cy="17" r="8" />
        <path d="M8 40c2-9 9-14 16-14s14 5 16 14" />
      </svg>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Photo coming soon
      </span>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <section
        id="about"
        className="border-t border-sage/20 bg-cream px-6 py-14 sm:py-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--color-sage) 12%, transparent), transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">
            A Bit About Me
          </h1>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-16 bg-sage/50"
          />
        </div>
      </section>

      {/* My Story — asymmetric two-column: heading + portrait beside the body copy */}
      <section
        id="my-story"
        className="border-t border-sage/20 bg-cream px-6 py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              <div
                aria-hidden="true"
                className="mb-4 h-px w-10 bg-sage-deep/50"
              />
              <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
                {aboutContent[0].title}
              </h2>
              <div className="mt-6 max-w-xs">
                <PhotoPlaceholder label="Tiffany's portrait" />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 lg:col-span-7">
              {aboutContent[0].blurb.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-charcoal sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Faith Over Fear? — full-width single column on a mint-tint field */}
      <section
        id="why-faith-over-fear"
        className="border-t border-sage/20 bg-mint-tint px-6 py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-2xl">
          <div aria-hidden="true" className="mb-4 h-px w-10 bg-sage-deep/50" />
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
            {aboutContent[1].title}
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-5">
            {aboutContent[1].blurb.map((paragraph, index) => {
              const isClosingBelief =
                index === aboutContent[1].blurb.length - 1;

              return isClosingBelief ? (
                <p
                  key={paragraph}
                  className="border-l-2 border-sage py-1 pl-6 font-heading text-2xl italic leading-relaxed text-sage-deep sm:pl-8 sm:text-3xl"
                >
                  {paragraph}
                </p>
              ) : (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-charcoal sm:text-lg"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Approach — narrower heading column beside the body copy, no image */}
      <section
        id="my-approach"
        className="border-t border-sage/20 bg-cream px-6 py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div
                aria-hidden="true"
                className="mb-4 h-px w-10 bg-sage-deep/50"
              />
              <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
                {aboutContent[2].title}
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5 lg:col-span-8">
              {aboutContent[2].blurb.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-charcoal sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
