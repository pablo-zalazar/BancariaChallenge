import { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Pagination from "../../components/pagination/Pagination";
import AppContext from "../../context/appContext";
import HomeCard from "./components/homeCard/HomeCard";
import Style from "./home.module.css";

function Home() {
  const { loading, currentPage, allCharacters, filteredCharactersList, selectedLocation, setCharactersList } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      if (!filteredCharactersList) {
        await setCharactersList(selectedLocation);
      }
    })();
  }, [selectedLocation, filteredCharactersList]);

  if (loading)
    return (
      <div className={Style.container}>
        <Filter />
        <h1>
          <LoadingSpinner />
        </h1>
      </div>
    );

  if (filteredCharactersList) {
    return (
      <div className={Style.container}>
        <Filter />
        {filteredCharactersList.length > 0 ? (
          <>
            <Pagination />
            <h1>Personajes de {selectedLocation}</h1>
            <div className={Style.cards}>
              {filteredCharactersList.slice((currentPage - 1) * 20, currentPage * 20).map((character) => (
                <HomeCard key={character.id} character={character} />
              ))}
            </div>
          </>
        ) : (
          <h1>No hay personajes de {selectedLocation}</h1>
        )}
      </div>
    );
  } else {
    return (
      <div className={Style.container}>
        <Filter />
        <Pagination />
        <h1>Todos los personajes</h1>
        <div className={Style.cards}>
          {allCharacters.map((character) => (
            <HomeCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
