const schema_mongoose = require('mongoose');

const user = schema_mongoose.Schema(
   {
    bname: { type: String },
    bgrp: { type: String },
    loc: { type: String },
    ph: { type: String },
    dt: { type: String },
    qt: { type: String }
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('patient_details', user);