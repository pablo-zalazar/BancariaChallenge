import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/detailsCard/DetailsCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useServices from "../../services/useServices";
import Style from "./details.module.css";

function Details() {
  const params = useParams();
  const { id } = params;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const { characters } = useServices();

  useEffect(() => {
    (async () => {
      const { data } = await characters.getOne(id);
      setCharacter(data);
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className={Style.details}>
      <DetailsCard character={character} />
    </div>
  );
}
export default Details;
