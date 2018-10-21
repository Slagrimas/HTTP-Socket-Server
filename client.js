console.log('Drip To Hard');
const net = require('net');
const host = process.argv[2];
const PORT = 80;

const client = net.createConnection(PORT, host, () => {
  console.log('server is connected');
  client.setEncoding('utf8');
});


  process.stdout.write(`Request made to ${PORT}`);
   //grabs request from node command line
  host((value, index) => {
      console.log('this is the value', value)
      console.log('this is the index', index)
    //grabs .html or .css portion of command
    let wantedFile = process.argv[2];
    console.log('this is the wanted value', wantedFile);
    //if argument doesn't exist, give instruction and end process
    if (!wantedFile) {
      console.log('this is help stuff', process.stdout.write(help/Usage))
      process.exit();
  
    }

    let indexOfHTML = wantedFile.indexOf('/');
    let requestedHTML = wantedFile.substring(indexOfHTML, wantedFile.length);
    let host = wantedFile.substring(0, indexOfHTML);
    //writes to server in request header format
  //  sendRequest(requestedHTML, host);
  })
  client.destroy();

client.on('data', (request) => {
  console.log(request);
})
process.stdin.pipe(client);

client.on('error', () => {
  process.stdout.write(`\nTerminating connection`);
  process.exit();
});
