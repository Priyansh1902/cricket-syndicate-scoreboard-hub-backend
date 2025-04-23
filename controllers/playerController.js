import {getAllPlayers} from '../models/playerModel.js';

const fetchAllplayers = async (req, res) => {
  try {
    const { data: players, error } = await getAllplayers();
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { fetchAllplayers };