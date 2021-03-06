const express = require('express');
const app = module.exports = express();
const dustjs = require('adaro');
const isProduction = process.env.NODE_ENV === 'production';

app.set('port', process.env.PORT);

app.use('/public', express.static(__dirname + '/public'));

// dust
app.engine('dust', dustjs.dust({
  cache: isProduction,
}));
app.set('view engine', 'dust');
app.set('views', __dirname + '/server/views');

// routes
app.get('/', (req, res) => {
  res.render('index');
});

// accessible in server views
app.locals.APP_GLOBALS = {
  ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_ONLY_KEY: process.env.ALGOLIA_SEARCH_ONLY_KEY,
};

// start server
app.listen(app.get('port'), () => {
  console.log(`Jauntful is listening on port ${app.get('port')}`);
});
