const net = require('net');
const element = require('./elements')
const PORT = process.env.PORT || 8080;

const server = net.createServer((socketInstance) => {
  //previous request here
  //heres where all code goes

  let savedData = "";
  console.log("YESSSAHHHHHH", savedData);
  // console.log('1st thing', socketInstance)
  socketInstance.setEncoding('UTF8');

  socketInstance.on('data', (chunk) => {
    console.log('what is', chunk); // = GET / HTTP /1.1...

    // console.log('!!!!!!!!!!!!!!!!!', element) // = 404,hydrogen etc..
    let requestURI = chunk.split(" ", 3); //Takes out the resource from the long request string
    console.log('??????????', chunk.split(" ", 3));

    let index = requestURI.join(" "); // = 1;
    console.log('|||||||||||', index)

    server.listen(8080, () => {
      console.log('port 8080' + '\n');

      // function getInformations(element, sender) {
      //   let request = element.split("\r\n");
      //   let method = request[0].split(' ');
      //   let wanted = method[1];
      //   let versio = method[2];
      //   console.log('powpowpow', request);
             
      // }
      console.log('nononononoon', getInformations())
    })

    socketInstance.end( () => {

    }); 
  });

  socketInstance.on('end', () => {
    console.log('client disconnected')

  });


  server.on('end', () => {
    console.log('connection ended');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});