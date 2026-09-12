import RequiredAsterisk from "./RequiredAsterisk";

type FieldLegendProps = {
  legendText: string;
  required?: boolean;
  id?: string;
};

const FieldLegend = ({ legendText, required, id }: FieldLegendProps) => {
  return (
    <legend id={id} className="text-sm font-medium text-charcoal">
      {legendText}
      <RequiredAsterisk required={required} />
    </legend>
  );
};

export default FieldLegend;
