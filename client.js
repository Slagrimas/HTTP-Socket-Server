console.log('Drip To Hard');
const net = require('net');
const host = process.argv[2];
const PORT = 80;
console.log('HOSTTTT', host);
const client = net.createConnection(PORT, host, () => {
  console.log('server is connected');

});

const date = new Date().toUTCString();
console.log(date);
const variable = `GET / HTTP/1.1\n Date: ${date}\n Host: ${host}\n User-Agent: Mark XVI \r\n\r\n`;
client.write(variable);

client.on('data', (returned) => {
  console.log('this is returned', returned.toString())
  // process.stdout.write(returned.toString());
});
