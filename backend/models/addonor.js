const schema_mongoose = require('mongoose');

const user = schema_mongoose.Schema(
   {
    bname: { type: String },
    bgrp: { type: String },
    loc: { type: String },
    ph: { type: String }
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('detail', user);