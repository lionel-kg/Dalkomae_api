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