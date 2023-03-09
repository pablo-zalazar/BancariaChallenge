import { Favorites } from "../../models/Favorite.js";

export const removeFavoriteController = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const existsFavorite = await Favorites.findAll({
      where: {
        id,
      },
    });
    if (existsFavorite.length < 1) {
      return res.status(409).send("No es un favorito");
    }
    await Favorites.destroy({ where: { id } });
    return res.status(200).send("Eliminado de favoritos");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error.message });
  }
};
