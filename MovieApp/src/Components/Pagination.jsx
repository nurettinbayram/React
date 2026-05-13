/* eslint-disable react/prop-types */
export default function Pagination({
  onNextPage,
  onPreviousPage,
  currentPage,
  totalPage,
}) {
  return (
    <div className="">
      <ul className="d-flex justify-content-between pagination">
        <li className={currentPage != 1 ? "page-item" : "page-item disabled"}>
          <a href="#" className="page-link" onClick={onPreviousPage}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <span className="page-link">
            {currentPage}/{totalPage}
          </span>
        </li>
        <li
          className={
            totalPage > currentPage ? "page-item " : "page-item disabled"
          }
        >
          <a href="#" className="page-link" onClick={onNextPage}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
