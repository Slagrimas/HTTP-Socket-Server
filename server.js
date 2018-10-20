const net = require('net');
const element = require('./elements')
const PORT = process.env.PORT || 8080;


const statusMessage = {
  good: `200 OK`,
  notFound: `404 Not Found`,
  forbidden: `403 Forbidden`,
  serverError: `500 Internal Server Error`
}

const server = net.createServer((socketInstance) => {

  socketInstance.setEncoding('UTF8');


  socketInstance.on('data', (chunk, sender) => {
    console.log('what is', chunk); 
  
        let request = chunk.split("\r\n")[0].split(' ');
        let requestMethod = request[0];
        let requestURI = request[1];
        let requestHTTPVersion = request[2];
        console.log('powpowpow', request);
        console.log('popopopopopop', requestMethod)
        console.log('llllllllll', requestURI)
        console.log('uuuuuuuuuuu', requestHTTPVersion)
        // console.log('keyyyy', chunk);
  
        if (requestMethod === 'GET' || requestURI === '/') 
         socketInstance.write(createrHeader(requestURI, requestHTTPVersion, statusMessage.good, element.index)) 

          //  chunk.write(createHeader(chunk, wanted2, statusMessage.good, element.index));
         
        // } else if (wanted === '/helium.html') {
        //   sender.write(createHeader(sender, wanted2, statusMessage.good, element.helium));
        // } else if (wanted === '/hydrogen.html') {
        //   sender.write(createHeader(sender, wanted2, statusMessage.good, element.hydrogen));
        // } else if (wanted === '/css/styles.css') {
        //    sender.write(createHeader(sender, wanted2, statusMessage.good, element.css));
        // } else {
        //    sender.write(createHeader(sender, wanted2, statusMessage.notFound, element.fourohfour));
        // }
        // sender.destroy();
    
    
  
    function createHeader(socketInstance, version, status, source) {
      return `${version} ${status}
    status: ${version} ${status}
    server:${process.env.USER} ${process.env.TERM_PROGRAM} ${process.env.TERM_PROGRAM_VERSION}
    date: ${new Date()}
    ${source}`
    
    }
  socketInstance.on('end', () => {
    console.log('client disconnected')
  })

  // server.on('end', () => {
  //   console.log('connection ended');
  // });
})
}) 
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})