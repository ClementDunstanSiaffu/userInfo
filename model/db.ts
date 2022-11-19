
const mongoose = require('mongoose');
const url = process.env.mongoURI;

mongoose.connect(url)
.then(()=>{})
.catch((err)=>{})

require('./schema');