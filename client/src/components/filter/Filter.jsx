import { useContext } from "react";
import AppContext from "../../context/appContext";
import Style from "./filter.module.css";

function Filter() {
  const { locationsList, selectedLocation, setLocation } = useContext(AppContext);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={Style.filter}>
      <span>Locaciones</span>
      <select name="location" onChange={handleChange} defaultValue={selectedLocation}>
        <option value="all">todos</option>
        {locationsList.map((location) => (
          <option key={location.id} value={location.location}>
            {location.location}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Filter;
