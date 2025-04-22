import {getAllTeams} from '../models/teamModel.js';

const fetchAllTeams = async (req, res) => {
  try {
    const { data: teams, error } = await getAllTeams();
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { fetchAllTeams };