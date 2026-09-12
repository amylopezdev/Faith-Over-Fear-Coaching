type RequiredAsteriskProps = {
  required?: boolean;
};

const RequiredAsterisk = ({ required }: RequiredAsteriskProps) => {
  return (
    required && (
      <span aria-hidden="true" className="text-sage-deep">
        *
      </span>
    )
  );
};

export default RequiredAsterisk;
