const mongoose = require('mongoose')

const ressourceSchema = mongoose.Schema({

       fileName: {
              type: String,
              required: true,

       },
       dateFinExploitation: {
              type: Date,
              default: 'undefined'

       },
       type: {
              type: String,
              required: true,
       },
       path: {
              type: String,
              required: true,
       }

})

module.exports = mongoose.model('Ressource', ressourceSchema)

