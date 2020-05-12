// Import required modules
const express = require('express');
const router = express.Router();
const service = require('./service');

// URLs
const routes = () => {
  router.post('/', service.post);
  router.get('/', service.list);
  router.put('/', service.put);
  router.delete('/', service.deleteEntry);
  return router;
};

module.exports = routes;
