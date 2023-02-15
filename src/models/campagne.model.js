const mongoose = require('mongoose')

const campagneSchema = mongoose.Schema({

       name: {
              type: String,
              required: true
       },

       type: {
              type: String,
              required: true
       },

       date: {
              type: Date,
              required: true
       },

       resource1: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Ressource"
       },
       resource2: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Ressource"
       },
       resource3: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Ressource"
       },
       resource4: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Ressource"
       },
       resource5: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Ressource"
       },

       target: {
              type: String,
              required: true
       },
       ressources: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Ressource'
       }],



})

module.exports = mongoose.model('Campagne', campagneSchema)