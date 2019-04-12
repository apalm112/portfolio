const express = require('express'),
  fs = require('fs'),
  path = require('path'),
  projects = require('./scripts/projects.js'),
  sass = require('node-sass');
  app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
// express || body-parser middleware parses request to make it accessible to req.body
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// This tells express to use Pug:
app.set('view engine', 'pug');


/*sass.render({
  file: 'public/scss/_custom.scss',
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('public/css/app.css', function(err) {
      if (err) {
        console.log(error);
      }
    });
  }
});*/


app.get('/*', function(req, res) {
  console.log('server.js     New req.url:', req.url);
  // console.log(projects.projects[0])
  res.render('index', { projects: projects.projects });
});


// start listening on our port, log message to stdout
const server = app.listen(app.get('port'), () => {
	console.log('\n                \x1b[45m%s\x1b[0m', `The portfolio server is listening on port ${server.address().port}`, '\n');	// eslint-disable-line no-console
});
