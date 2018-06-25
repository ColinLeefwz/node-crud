// create new express routes

const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

// export router
module.exports = router;

//define routes
router.get('/', mainController.showHome);

//define routes
router.get('/events', eventsController.showEvents);
