import type { Dispatch, SetStateAction } from "react";
import { commonCountries, countries, usaStates } from "../data/countries";

type CountrySelectProps = {
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
};

const CountrySelect = ({
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
}: CountrySelectProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="text-sm font-medium text-charcoal">
          Country
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
          <label htmlFor="state" className="text-sm font-medium text-charcoal">
            State
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
    </>
  );
};

export default CountrySelect;
