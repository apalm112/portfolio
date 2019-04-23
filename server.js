const express = require('express'),
  fs = require('fs'),
  path = require('path'),
  projects = require('./scripts/projects.js'),
  app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
// express || body-parser middleware parses request to make it accessible to req.body
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// This tells express to use Pug:
app.set('view engine', 'pug');

app.get('/*', function(req, res) {
  console.log('server.js     New req.url:', req.url);
  // console.log(projects.projects[0])
  res.render('index', { projects: projects.projects });
});


// start listening on our port, log message to stdout
const server = app.listen(app.get('port'), () => {
	console.log('\n                \x1b[45m%s\x1b[0m', `The portfolio server is listening on port ${server.address().port}`, '\n');	// eslint-disable-line no-console
});
