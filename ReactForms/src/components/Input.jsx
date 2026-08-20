export default function Input({
  id,
  name,
  labelText,
  error,
  ...props //...props en son olmasi lazim.
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input id={id} name={name} {...props} className="form-control" />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}
