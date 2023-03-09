import axios from "axios";

export const locationCharactersController = async (req, res) => {
  const { location } = req.params;
  let character = {};
  let charactersList = [];
  try {
    const resp = await axios.get(`https://rickandmortyapi.com/api/location`);
    const id = resp.data.results.filter((element) => element.name === location)[0].id;
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    for (let i = 0; i < data.residents.length; i++) {
      character = await axios.get(`${data.residents[i]}`);
      charactersList = [
        ...charactersList,
        {
          id: character.data.id,
          name: character.data.name,
          image: character.data.image,
          location: character.data.location.name,
        },
      ];
    }
    return res.json({ characters: charactersList });
  } catch (error) {
    return res.status(500).json({ msg: error.response.data.error });
  }
};
