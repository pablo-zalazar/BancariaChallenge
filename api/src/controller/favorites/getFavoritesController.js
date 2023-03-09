import { Favorites } from "../../models/Favorite.js";

export const getFavoriteController = async (req, res) => {
  try {
    const favorites = await Favorites.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ msg: error.response.data.error });
  }
};
