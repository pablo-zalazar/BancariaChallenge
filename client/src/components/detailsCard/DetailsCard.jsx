import { useContext } from "react";
import { toast } from "react-toastify";
import AppContext from "../../context/appContext";
import Style from "./detailsCard.module.css";

function DetailsCard({ character }) {
  const { myFavorites, addToFavorites, removeFavorite } = useContext(AppContext);

  const handleAddFavorite = async () => {
    const resp = await addToFavorites(character);
    if (resp.status === 200) {
      toast.success(resp.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (resp.status === 409) {
      toast.error(resp.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleRemoveFavorite = async () => {
    const resp = await removeFavorite(character.id);
    if (resp.status === 200) {
      toast.success(resp.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (resp.status === 409) {
      toast.error(resp.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={Style.details}>
      <img src={character.image} alt="imagen" />
      <div className={Style.info}>
        <div>
          <h3>{character.name}</h3>
          <p>
            <span>Especie: </span>
            {character.species}
          </p>
          <p>
            <span>origen: </span>
            {character.origin}
          </p>
          <p>
            <span>Locacion: </span>
            {character.location}
          </p>
          <p>
            <span>Estado: </span>
            {character.status}
          </p>
        </div>
        {myFavorites.map((favorite) => favorite.id).includes(character.id) ? (
          <button className={Style.favoriteRemove} onClick={handleRemoveFavorite}>
            Eliminar de favoritos
          </button>
        ) : (
          <button className={Style.favoriteAdd} onClick={handleAddFavorite}>
            Agregar a favoritos
          </button>
        )}
      </div>
    </div>
  );
}
export default DetailsCard;
