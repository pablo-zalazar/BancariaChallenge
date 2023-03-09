import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "../../context/appContext";
import Header from "../header/Header";
import Style from "./layout.module.css";

function Layout({ children }) {
  const { getFavorites, getLocations } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      await getFavorites();
      await getLocations();
    })();
  }, []);

  return (
    <div className={Style.layout}>
      <Header />
      {children}
      <ToastContainer />
    </div>
  );
}

export default Layout;
