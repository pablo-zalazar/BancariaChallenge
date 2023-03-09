import { Link } from "react-router-dom";
import Style from "./homeCard.module.css";

function HomeCard({ character }) {
  return (
    <div className={Style.card}>
      <div>
        <img src={character.image} alt="imagen" />
        <h3>{character.name}</h3>
      </div>
      <Link to={`/detalles/${character.id}`}>Detalles</Link>
    </div>
  );
}
export default HomeCard;
