import express from 'express';
import {
  getGuideAvailableTimes,
  updateAvailabilityTime,
} from '../controllers/guides.controller.js';

export const guidesRoute = express.Router({ mergeParams: true });

// routes which will be appended to base route 
guidesRoute.route('/availableTimes').get(getGuideAvailableTimes);
guidesRoute.route('/updateAvailabilityTime').post(updateAvailabilityTime);
