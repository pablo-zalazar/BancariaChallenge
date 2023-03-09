import { Link } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <Link to={"/"} className={style.logo}>
        <img src="/assets/logo.png" alt="logo" />
      </Link>
      <Link to={"/favoritos"} className={style.favButton}>
        Favoritos
      </Link>
    </div>
  );
}
export default Header;
