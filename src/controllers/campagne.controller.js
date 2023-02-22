const Campagne = require("../models/campagne.model.js");
const Ressource = require("../models/ressource.model.js");

exports.createCampagne = (req, res) => {
       req.body.date = new Date();
       Campagne.create(req.body).then((campagne) => {
              res.send(campagne)
       }
       ).catch(err => res.status(400).send(err));
}

exports.getCampagnes = (req, res) => {
       Campagne.find().populate("ressources").then((campagne) => {
              res.send(campagne)
       }).catch(err => res.status(400).send(err))
}

/*exports.getCampagne = (req, res) => {
       Campagne.findById({ _id: req.params.id }).then((campagne) => {
              const ids = [campagne.resource1, campagne.resource2, campagne.resource3, campagne.resource4, campagne.resource5];
              Ressource.find({ _id: { $in: ids } }).then((ressource) => {
                     campagne.ressources = ressource;
                     res.send(campagne);
              });
       })
              .catch(err => res.status(400).send(err));
};*/

exports.getCampagne = (req,res) =>{
       Campagne.findById({ _id: req.params.id }).populate("ressources").then((campagne) => {
              res.send(campagne);
       }).catch(err => res.status(400).send(err));
}

exports.addRessourceToCampagne = (req,res) => {
       Ressource.findById({_id: req.body.id}).then((ressource)=>{
              Campagne.findByIdAndUpdate({_id: req.params.id},{$push: {ressources: ressource}},{new: true})
              .then((campagne)=>{
                     res.send(campagne);
              }).catch((err) => {
                     res.status(400).send(err);
              })
       })
}

exports.getSearchCampagne = (req, res) => {
       const name = req.param("name");
       Campagne.find({name: {$regex: ".*" + name + ".*"}}).populate("ressources").then((campagne) => {
              res.send(campagne)
       })
       .catch(err => res.status(400).send(err))
}
