const Campagne = require("../models/campagne.model.js");
const Ressource = require("../models/ressource.model.js");

exports.createCampagne = (req, res) => {
       const newCampagne = new Campagne({
              name: req.body.name,
              type: req.body.type,
              date: req.body.date,
              resource1: req.body.resource1,
              resource2: req.body.resource2,
              resource3: req.body.resource3,
              resource4: req.body.resource4,
              resource5: req.body.resource5,
              target: req.body.target
       })
       newCampagne.save().then(
              (campagne) =>
                     res.send(campagne)
       )
              .catch(err => res.status(400).send(err));
}

exports.getCampagnes = (req, res) => {
       Campagne.find().then((campagne) => {
              res.send(campagne)
       })
              .catch(err => res.status(400).send(err))
}

exports.getCampagne = (req, res) => {
       Campagne.findById({ _id: req.params.id }).then((campagne) => {
              const ids = [campagne.resource1, campagne.resource2, campagne.resource3, campagne.resource4, campagne.resource5];
              Ressource.find({ _id: { $in: ids } }).then((ressource) => {
                     campagne.ressources = ressource;
                     res.send(campagne);
              });
       })
              .catch(err => res.status(400).send(err));
};