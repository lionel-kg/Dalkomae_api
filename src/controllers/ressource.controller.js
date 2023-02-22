const Ressource = require("../models/ressource.model.js");

exports.createRessource = (req, res) => {
       Ressource.create(req.body).then(
              (ressource) =>
                     res.send(ressource)
       )
       .catch(err => res.status(400).send(err));
}

exports.getRessource = (req, res) => {
       Ressource.find().populate("campagnes").then((ressource) => {
              res.send(ressource)
       })
              .catch(err => res.status(400).send(err))
}

exports.getRessourceByExpirationDate = (req, res) => {
       Ressource.find().sort({dateFinExploitation: "asc"}).populate("campagnes").then((ressource) => {
              res.send(ressource)
       })
       .catch(err => res.status(400).send(err))
}

exports.getSearchRessource = (req, res) => {
       const file = req.param("file");
       Ressource.find({file: {$regex: ".*" + file + ".*"}}).populate("campagnes").then((ressource) => {
              res.send(ressource)
       })
       .catch(err => res.status(400).send(err))
}


exports.getExpiredRessource = (req, res) => {
       const now = new Date();
       Ressource.find({dateFinExploitation: {$lte: now}}).populate("campagnes").then((ressource) => {
              res.send(ressource)
       })
       .catch(err => res.status(400).send(err))
}

exports.getSoonExpiredRessource = (req, res) => {
       const now = new Date();
       const inOneMonth = new Date(now.setMonth(now.getMonth()+1));
       Ressource.find({dateFinExploitation: {$gte: new Date(), $lte: inOneMonth}}).populate("campagnes").then((ressource) => {
              res.send(ressource)
       })
       .catch(err => res.status(400).send(err))
}


