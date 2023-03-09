import { useContext } from "react";
import DetailsCard from "../../components/detailsCard/DetailsCard";
import AppContext from "../../context/appContext";
import Style from "./favorites.module.css";

function Favorites() {
  const { myFavorites } = useContext(AppContext);

  if (myFavorites.length < 1)
    return (
      <div className={Style.favorites}>
        <h1>Favoritos</h1>
        <h2>No hay favoritos agregados</h2>
      </div>
    );

  return (
    <div className={Style.favorites}>
      <h1>Favoritos</h1>
      <div className={Style.favoritesList}>
        {myFavorites.map((favorite) => (
          <DetailsCard key={favorite.id} character={favorite} />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
