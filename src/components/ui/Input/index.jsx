
function Input({
  label,
  id,
  as: Tag = "input",
  error,
  ...props
}) {
  return (
    <div className="form-field">
      {label && <label htmlFor={id}>{label}</label>}

      <Tag
        id={id}
        className={`form-control ${error ? "form-control--error" : ""}`}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

export default Input;
