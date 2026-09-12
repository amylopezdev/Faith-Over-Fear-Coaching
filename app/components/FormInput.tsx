import type { ChangeEvent, HTMLInputTypeAttribute } from "react";
import RequiredAsterisk from "./RequiredAsterisk";

type FormInputProps = {
  type?: HTMLInputTypeAttribute;
  labelText: string;
  id: string;
  value: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
};

const FormInput = ({
  type = "text",
  labelText,
  id,
  value,
  placeholder,
  required,
  error,
  onChange,
}: FormInputProps) => {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {labelText}
        <RequiredAsterisk required={required} />
      </label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
