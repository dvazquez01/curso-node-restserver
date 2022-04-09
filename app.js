const Server = require('./models/server');

require('dotenv').config();


const main = async() => {

  const server = new Server();

  server.listen();
  

} 

main();