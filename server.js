// grab out dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 9090,
  expressLayouts = require('express-ejs-layouts');

// configure out application
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// set the routes
app.use(require('./app/routes'));

// start out server
app.listen(port, () => {
  console.log(`Application is now listening on http://localhost:${port}`);
});

