const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const Ressource = require('./models/ressource.model')
const mailgun = require('mailgun.js')


require('dotenv').config()


app.use(cors());

app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Successfully connect to database")
  })
  .catch(err => console.log(err))

app.use("/api/v1", apiRouter);
app.use(errorHandler);

app.listen(process.env.PORT, function () {
  console.log("server launch my");
})


var mailSender = function (user, subject, html, callback) {
  var mg = mailgun({apiKey: "7c442915a75eb12422bedccb9a256cd2-ca9eeb88-09cf7e3e", domain: "sandbox41c32b89a6f14df68e336cbc2555f9d0.mailgun.org"});

  var data = {
    from: 'sandbox41c32b89a6f14df68e336cbc2555f9d0.mailgun.org',
    to: 'lukamang@hotmail.fr',
    subject:  'Test',
    text: 'Testing',
  };

  mg.messages().send(data, function (err, body) {
    console.log(body);
  }); 
};

