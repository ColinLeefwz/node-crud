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

// seed events
router.get('/events/seed',  eventsController.seedEvents);

// create events
// create events
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// edit events
// delete events

// show a single event
router.get('/events/:slug', eventsController.showSingle);
