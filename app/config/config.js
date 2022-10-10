const dotenv = require('dotenv')
const config = {
    Url:'http://localhost:',
    PORT: process.env.PORT || 3000,
    dbConfig : {
      host: 'localhost',
      database : 'nodejs-api',
      username: 'root',
      password: '',
      dialect: 'mysql',
      logging:false
    },
  }
  
  module.exports = config;