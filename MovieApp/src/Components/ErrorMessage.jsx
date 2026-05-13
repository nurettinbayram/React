/* eslint-disable react/prop-types */
export default function ErrorMessage({ errMessage }) {
  return <div className="alert alert-danger">{errMessage}</div>;
}
