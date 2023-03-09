import { createContext, useState } from "react";
import useServices from "../services/useServices";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { favorites, locations, characters } = useServices();
  const [loading, setLoading] = useState(true);

  const [myFavorites, setMyFavorites] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharactersList, setFilteredCharactersList] = useState("");
  const [characterDetails, setCharacterDetails] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  const [locationsList, setLocationsList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("all");

  const getFavorites = async () => {
    const { data } = await favorites.getAll();
    setMyFavorites(data);
    return;
  };

  const addToFavorites = async (values) => {
    try {
      const { data, status } = await favorites.addFavorite(values);
      setMyFavorites([...myFavorites, values]);
      return { status, data };
    } catch (error) {
      console.log(error);
      const { data, status } = error.response;
      return { data, status };
    }
  };

  const removeFavorite = async (id) => {
    try {
      const { data, status } = await favorites.removeFavorite(id);
      const newFavorites = myFavorites.filter((favorite) => favorite.id !== id);
      setMyFavorites(newFavorites);
      return { status, data };
    } catch (error) {
      console.log(error);
      const { data, status } = error.response;
      return { data, status };
    }
  };

  const getLocations = async () => {
    const { data } = await locations.getAll();
    setLocationsList(data);
  };

  const setLocation = (value) => {
    setFilteredCharactersList("");
    setCurrentPage(1);
    setSelectedLocation(value);
  };

  const changeLoading = (value) => setLoading(value);

  const setCharactersList = async (value) => {
    setLoading(true);
    if (value === "all") {
      try {
        const { data } = await characters.getAll(currentPage);
        setAllCharacters(data.characters);
        const pages = Array.from({ length: data.pages }, (_, i) => i + 1);
        setPages(pages);
      } catch (error) {
        console.log(error);
      }
    } else {
      const { data } = await locations.getFiltered(value);
      const pages = Array.from({ length: Math.ceil(data.characters.length / 20) }, (_, i) => i + 1);
      setPages(pages);
      setFilteredCharactersList(data.characters);
    }
    setLoading(false);
  };

  const changePage = async (value) => {
    setCurrentPage(value);
    if (selectedLocation === "all") {
      const { data } = await characters.getAll(value);
      setAllCharacters(data.characters);
    }
  };

  const addCharacterDetails = async (id) => {
    setLoading(true);
    const { data } = await characters.getOne(id);
    setCharacterDetails(data);
    setLoading(false);
  };

  const removeCharacterDetails = () => {
    setCharacterDetails(null);
  };

  const data = {
    myFavorites,
    allCharacters,
    filteredCharactersList,
    currentPage,
    pages,
    locationsList,
    selectedLocation,
    loading,
    characterDetails,
    getFavorites,
    addToFavorites,
    removeFavorite,
    getLocations,
    setLocation,
    changeLoading,
    setCharactersList,
    changePage,
    addCharacterDetails,
    removeCharacterDetails,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
