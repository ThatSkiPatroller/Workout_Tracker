const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//     });
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});