import axios from "axios";

export const getOneCharacterController = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const resp = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin.name,
      location: data.location.name,
      image: data.image,
    };
    return res.status(200).send(resp);
  } catch (error) {
    return res.status(500).json({ msg: error.response.data.error });
  }
};
