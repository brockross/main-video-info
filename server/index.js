const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.static('client/dist'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())


app.use((req, res, next) => {
  console.log(`serving a ${req.method} request to url ${req.url}.`);
  next();
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// get request example
app.get('/movies', (req, res) => {
  console.log(req.query);
  let movieId = req.query.movieID;
  db.getMovieInfo(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0]);
    }
  })
});
// route for getting movie poster
app.get('/movies/poster', (req, res) => {
  // create a db helper function;
  let movieId = req.query.movieID;
  db.getMoviePoster(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(results);
      res.json(results[0].info.image);
    }
  })
})