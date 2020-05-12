// Import required modules
const express = require('express');
const router = express.Router();

// Modules Routing
const walletRouter = require('./wallet/index');
// URLs
const routes = () => {
  // API routes
  router.use('/api/wallet', walletRouter());
  return router;
};

module.exports = routes;
