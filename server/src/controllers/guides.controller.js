import {
  getGuideAvailableTimesService,
  updateAvailabilityTimeService,
} from '../services/guides.service.js';

// Controller for Available Times
export const getGuideAvailableTimes = async (req, res) => {
  const companies = await getGuideAvailableTimesService();
  res.status(200).json(companies);
};

// Controller for Update Available time for each day
export const updateAvailabilityTime = async (req, res) => {
  console.log(req.body);
  const updateDone = await updateAvailabilityTimeService(req.body);
  res.status(200).json(updateDone);
};
