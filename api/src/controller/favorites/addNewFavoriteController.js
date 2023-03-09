import { Favorites } from "../../models/Favorite.js";

export const addNewFavoriteController = async (req, res) => {
  const { id, name, status, species, origin, location, image } = req.body;
  try {
    const existsFavorite = await Favorites.findAll({
      where: {
        id,
      },
    });
    if (existsFavorite.length > 0) {
      return res.status(409).send("Ya esta en favoritos");
    }
    await Favorites.create({ id, name, status, species, origin, location, image });
    return res.status(200).send("Agregado a favoritos");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error.message });
  }
};
