// grab out dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 9090;

// configure out application

// set the routes
app.get('/', (req, res) => {
  res.send("Hello, I am the app!");
});

// start out server
app.listen(port, () => {
  console.log(`Application is now listening on http://localhost:${port}`);
});

