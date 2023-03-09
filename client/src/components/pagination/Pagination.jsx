import { useContext } from "react";
import AppContext from "../../context/appContext";
import Style from "./pagination.module.css";

function Pagination() {
  const { currentPage, pages, changePage } = useContext(AppContext);

  const handleChangePage = async (value) => {
    await changePage(value);
  };

  return (
    <div className={Style.pagination}>
      {pages.length > 0 && (
        <>
          <button disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>
            {"<"}
          </button>

          <p>
            {currentPage} de {pages.length}
          </p>
          <button disabled={currentPage === pages.length} onClick={() => handleChangePage(currentPage + 1)}>
            {">"}
          </button>
        </>
      )}
    </div>
  );
}
export default Pagination;
