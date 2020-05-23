const routes = require('express').Router();
import bidRoutes from './BidRoutes'

routes.use('/bid', bidRoutes);

module.exports = routes;