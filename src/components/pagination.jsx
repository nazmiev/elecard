import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ onChangePage }) {
  return (
    <>
      <ReactPaginate
        className="root"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => {onChangePage(event.selected + 1)}}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
