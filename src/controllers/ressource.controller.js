const Ressource = require("../models/ressource.model.js");

exports.createRessource = (req, res) => {
       const newRessource = new Ressource({
              file: req.body.file,
              dateFinExploitation: req.body.dateFinExploitation,
              type: req.body.type,
              path: req.body.path
       })
       newRessource.save().then(
              (ressource) =>
                     res.send(ressource)
       )
              .catch(err => res.status(400).send(err));
}

exports.getRessource = (req, res) => {
       Ressource.find().then((ressource) => {
              res.send(ressource)
       })
              .catch(err => res.status(400).send(err))
}