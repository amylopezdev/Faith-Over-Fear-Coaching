import FieldLegend from "./FieldLegend";

type FormCheckboxInputProps = {
  legendText: string;
  required?: boolean;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  name: string;
  helperText?: string;
  maxSelections?: number;
  error?: string;
};

const FormCheckboxInput = ({
  legendText,
  required,
  options,
  selectedOptions,
  onChange,
  name,
  helperText,
  maxSelections,
  error,
}: FormCheckboxInputProps) => {
  const hasReachedMax =
    typeof maxSelections === "number" && selectedOptions.length >= maxSelections;
  const errorId = `${name}-error`;

  return (
    <fieldset className="flex flex-col gap-3">
      <FieldLegend legendText={legendText} required={required} />
      {helperText && <p className="text-sm text-muted">{helperText}</p>}
      <div className="mt-2 flex flex-col gap-3">
        {options.map((option) => {
          const id = `${name}-${option.toLowerCase().replaceAll(" ", "-")}`;
          const checked = selectedOptions.includes(option);
          const disabled = !checked && hasReachedMax;

          return (
            <div key={option} className="flex items-center gap-3">
              <input
                id={id}
                name={name}
                type="checkbox"
                value={option}
                checked={checked}
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                onChange={() => onChange(option)}
                className="h-4 w-4 shrink-0 accent-sage-deep disabled:cursor-not-allowed disabled:opacity-50"
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

export default FormCheckboxInput;
