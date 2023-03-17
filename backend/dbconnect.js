const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const url = 'mongodb://localhost:27017/sweta';

mongoose.connect(url)
  .then(() => {
    console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
  })
  .catch(err => {
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    process.exit();
  });

module.exports = mongoose;