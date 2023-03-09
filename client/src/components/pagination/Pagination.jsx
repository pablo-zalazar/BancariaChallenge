import { useContext } from "react";
import AppContext from "../../context/appContext";
import Style from "./pagination.module.css";

function Pagination() {
  const { currentPage, pages, changePage } = useContext(AppContext);

  const handleChangePage = async (value) => {
    await changePage(parseInt(value));
  };

  return (
    <div className={Style.pagination}>
      {pages.length > 0 && (
        <>
          <button disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>
            {"<"}
          </button>

          <div>
            <select name="pages" onChange={(e) => handleChangePage(e.target.value)} defaultValue={currentPage}>
              {pages.map((page) => (
                <option key={page} value={page} selected={currentPage === page}>
                  {page}
                </option>
              ))}
            </select>
            <p>de {pages.length}</p>
          </div>

          <button disabled={currentPage === pages.length} onClick={() => handleChangePage(currentPage + 1)}>
            {">"}
          </button>
        </>
      )}
    </div>
  );
}
export default Pagination;
