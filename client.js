// console.log('Drip To Hard');
const net = require('net');
const host = process.argv[2];
const PORT = 8080;
  console.log('HOSTTTT', host);
const client = net.createConnection(PORT, host, () => {
  console.log('server is connected');
});

let date = new Date().toUTCString();
console.log(date);
let variable = `GET  / HTTP/1.1 
Date: ${date} 
Host: ${host}
User-Agent: MarkXVI\r\n\r\n`;
//HEADER IS SUPER SPACIOUS SPECIFIC
 console.log(variable);
client.write(variable);

client.on('data', (returnedDATA) => {
  console.log('this is returned', returnedDATA.toString());
  // process.stdout.write(returnedDATA.toString());
});
