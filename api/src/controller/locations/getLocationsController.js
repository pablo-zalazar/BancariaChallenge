import axios from "axios";

export const getLocationsController = async (req, res) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);
    const locations = data.results.map((location) => {
      return { id: location.id, location: location.name };
    });
    return res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.response.data.error });
  }
};
