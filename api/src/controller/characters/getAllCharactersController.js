import axios from "axios";

export const getAllCharactersController = async (req, res) => {
  const { page } = req.query;
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const resp = data.results.map((char) => {
      return {
        id: char.id,
        name: char.name,
        image: char.image,
        location: char.location.name,
      };
    });
    return res.json({ pages: data.info.pages, characters: resp });
  } catch (error) {
    return res.status(500).json({ msg: error.response.data.error });
  }
};
