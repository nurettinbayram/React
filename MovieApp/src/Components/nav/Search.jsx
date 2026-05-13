/* eslint-disable react/prop-types */
export default function Search({ setQuery, query }) {
  return (
    <input
      type="text"
      id="input-text"
      placeholder="Enter movie name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
