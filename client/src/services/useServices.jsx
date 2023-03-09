import axios from "axios";

const useServices = () => {
  const BASE_URL = "http://localhost:4000";

  const routeURLS = {
    characters: BASE_URL + "/personajes",
    favorites: BASE_URL + "/favoritos",
    locations: BASE_URL + "/locaciones",
  };

  function api() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const characters = {
    getAll: (page) => api().get(`${routeURLS.characters}?page=${page}`),
    getOne: (id) => api().get(`${routeURLS.characters}/${id}`),
  };

  const favorites = {
    getAll: () => api().get(`${routeURLS.favorites}/`),
    addFavorite: (data) => api().post(`${routeURLS.favorites}/`, data),
    removeFavorite: (id) => api().delete(`${routeURLS.favorites}/${id}`),
  };

  const locations = {
    getAll: () => api().get(`${routeURLS.locations}/`),
    getFiltered: (location) => api().get(`${routeURLS.locations}/filter/${location}`),
  };

  return {
    characters,
    favorites,
    locations,
  };
};

export default useServices;
