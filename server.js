const net = require('net');

const PORT = process.env.PORT || 8080; 

const server = net.createServer((socketInstance) => {
  console.log('client Connected');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});