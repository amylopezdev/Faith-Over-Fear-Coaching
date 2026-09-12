import type { ChangeEvent } from "react";
import FieldLegend from "./FieldLegend";

type FormRadioInputProps = {
  legendText: string;
  required?: boolean;
  options: string[];
  name: string;
  error?: string;
  onChange: (value: string) => void;
  selectedOption: string;
};

const FormRadioInput = ({
  legendText,
  required,
  options,
  name,
  error,
  onChange,
  selectedOption,
}: FormRadioInputProps) => {
  const errorId = `${name}-error`;
  const legendId = `${name}-legend`;

  return (
    <fieldset
      role="radiogroup"
      aria-labelledby={legendId}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
      className="flex flex-col gap-3"
    >
      <FieldLegend id={legendId} legendText={legendText} required={required} />
      <div className="flex flex-col gap-2.5 mt-2">
        {options.map((option) => {
          const slug = option
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace(/[^a-z0-9-]/g, "");
          const id = `${name}-${slug}`;

          return (
            <div key={option} className="flex items-center gap-2.5">
              <input
                type="radio"
                id={id}
                name={name}
                value={option}
                required={required}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChange(event.target.value);
                }}
                checked={selectedOption === option}
                className="h-4 w-4 accent-sage-deep"
              />
              <label htmlFor={id} className="text-charcoal">
                {option}
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
};

export default FormRadioInput;
