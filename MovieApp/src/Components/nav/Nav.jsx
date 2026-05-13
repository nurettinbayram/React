/* eslint-disable react/prop-types */
export default function Nav({ children }) {
  return (
    <nav className="container-fluid">
      <div className="container">{children}</div>
    </nav>
  );
}
