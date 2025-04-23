import {getAllMatchs} from '../models/matchModel.js';

const fetchAllmatchs = async (req, res) => {
  try {
    const { data: matchs, error } = await getAllmatchs();
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(matchs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { fetchAllmatchs };