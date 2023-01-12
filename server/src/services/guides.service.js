import { Schedule } from '../../db.js';

// get all records from backend
export const getGuideAvailableTimesService = async () => {
  const availableTimes = await Schedule.findAll();
  return availableTimes;
};

// update backend table with new availablity
export const updateAvailabilityTimeService = async (body) => {
  const updateDone = await Schedule.update(body);
  return updateDone;
};
