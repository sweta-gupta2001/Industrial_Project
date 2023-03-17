const schema_mongoose = require('mongoose');

const user = schema_mongoose.Schema(
   {
    bname: { type: String },
    bgrp: { type: String },
    loc: { type: String },
    dt: { type: String }
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('hospital_details', user);