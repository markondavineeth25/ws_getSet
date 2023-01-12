import express from 'express';
import {guidesRoute} from './guides.route.js';

export const router = express.Router();

router.use('/guide-time', guidesRoute);

router.get('/', (req, res) => res.send('Guide Time Finder App'));

router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});
