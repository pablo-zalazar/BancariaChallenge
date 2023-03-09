import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/detailsCard/DetailsCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import AppContext from "../../context/appContext";
import Style from "./details.module.css";

function Details() {
  const params = useParams();
  const { id } = params;
  const { characterDetails, addCharacterDetails, removeCharacterDetails, loading } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      await addCharacterDetails(id);
    })();
    return () => removeCharacterDetails();
  }, []);

  if (loading || !characterDetails)
    return (
      <div className={Style.details}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className={Style.details}>
      <DetailsCard character={characterDetails} />
    </div>
  );
}
export default Details;
