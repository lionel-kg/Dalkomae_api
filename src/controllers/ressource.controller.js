const Ressource = require("../models/ressource.model.js");

exports.createRessource = (req, res) => {
       req.body.dateFinExploitation = new Date();
       Ressource.create(req.body).then(
              (ressource) =>
                     res.send(ressource)
       )
              .catch(err => res.status(400).send(err));
}

exports.getRessource = (req, res) => {
       Ressource.find().then((ressource) => {
              res.send(ressource)
       }).catch(err => res.status(400).send(err))
}