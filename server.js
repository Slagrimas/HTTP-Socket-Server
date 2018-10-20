const net = require('net');
const element = require('./elements')
const PORT =  8080;


const statusMessage = {
  good: `200 OK`,
  notFound: `404 Not Found`,
  forbidden: `403 Forbidden`,
  serverError: `500 Internal Server Error`
}

const server = net.createServer((socketInstance) => {

  socketInstance.setEncoding('UTF8');

  server.listen(8080, () => {
    console.log('port 8080' + '\n');
  })
  
  socketInstance.on('data', (chunk) => {
    console.log('what is', chunk);

    // console.log('request', request);
    let request = chunk.split('\r\n');
    let method = request[0].split(' ');
    let wanted = method[1];
    let versio = method[2];
 
    if (wanted === '/' || wanted === '/index.html') {
      socketInstance.write(createHeader(socketInstance, versio, statusMessage.good, element.index));
    } else if (wanted === '/helium.html') {
      socketInstance.write(createHeader(socketInstance, versio, statusMessage.good, element.helium));
    } else if (wanted === '/hydrogen.html') {
      socketInstance.write(createHeader(socketInstance, versio, statusMessage.good, element.hydrogen));
    } else if (wanted === '/css/styles.css') {
      socketInstance.write(createHeader(socketInstance, versio, statusMessage.good, element.css));
    } else {
      socketInstance.write(createHeader(socketInstance, versio, statusMessage.notFound, element._404));
     
    }
    socketInstance.destroy();
  })

  function createHeader(socket, version, status, source) {
    return `${version} ${status}
    status: ${version} ${status}
    server:${process.env.USER} ${process.env.TERM_PROGRAM} ${process.env.TERM_PROGRAM_VERSION}
    date: ${new Date()}

    ${source}`

  }

  socketInstance.on('end', () => {
    console.log('client disconnected')
    
  })

})
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})