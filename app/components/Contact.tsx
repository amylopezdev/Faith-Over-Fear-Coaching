"use client";
import { useState } from "react";
import { commonCountries, countries, usaStates } from "../data";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedReferralOption, setSelectedReferralOption] = useState("");

  const referralOptions = [
    "Instagram",
    "LinkedIn",
    "Google",
    "Referral",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Contact
        </h2>
        <p className="mt-3 text-center text-charcoal">
          This short form helps me understand your career goals & challenges. If
          there&apos;s a strong fit, I will invite you to a tailored career
          strategy call.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          <span aria-hidden="true" className="text-sage-deep">
            *
          </span>{" "}
          Required field
        </p>
        <form className="mx-auto mt-4 flex max-w-xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-charcoal">
              Name{" "}
              <span aria-hidden="true" className="text-sage-deep">
                *
              </span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder=""
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-charcoal"
            >
              Email address{" "}
              <span aria-hidden="true" className="text-sage-deep">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=""
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-sm font-medium text-charcoal"
            >
              Country{" "}
              <span aria-hidden="true" className="text-sage-deep">
                *
              </span>
            </label>
            <select
              id="country"
              name="country"
              value={selectedCountry}
              required
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedState("");
              }}
              className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
            >
              <option value="" disabled>
                Select your country
              </option>
              {commonCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
              <option disabled>──────────</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {selectedCountry === "United States" && (
            <div className="flex flex-col gap-2">
              <label
                htmlFor="state"
                className="text-sm font-medium text-charcoal"
              >
                State{" "}
                <span aria-hidden="true" className="text-sage-deep">
                  *
                </span>
              </label>
              <select
                id="state"
                name="state"
                value={selectedState}
                required
                onChange={(e) => {
                  setSelectedState(e.target.value);
                }}
                className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
              >
                <option value="" disabled>
                  Select your state
                </option>
                {usaStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          )}

          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium text-charcoal">
              How did you hear about my services?{" "}
              <span aria-hidden="true" className="text-sage-deep">
                *
              </span>
            </legend>
            <div className="flex flex-col gap-2.5">
              {referralOptions.map((option) => (
                <div key={option} className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    id={option}
                    name="referral"
                    value={option}
                    required
                    onChange={(e) => {
                      setSelectedReferralOption(e.target.value);
                    }}
                    checked={selectedReferralOption === option}
                    className="h-4 w-4 accent-sage-deep"
                  />
                  <label htmlFor={option} className="text-charcoal">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-2 self-start cursor-pointer rounded-lg bg-sage px-8 py-3 font-medium text-white shadow-sm transition-all hover:bg-sage-deep hover:shadow-md active:scale-[0.98] active:shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-deep focus:ring-offset-2 focus:ring-offset-mint-tint"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
