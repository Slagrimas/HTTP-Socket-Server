const net = require('net');
const element = require('./elements')
const PORT = process.env.PORT || 8080;

const server = net.createServer((socketInstance) => {
  //previous request here
  //heres where all code goes
  process.stdout.write('A client is connected \n');
  socketInstance.setEncoding('UTF8');
  console.log('1st thing', socketInstance)

  socketInstance.on('data', (data) => {
    console.log('what is', data); // = GET / HTTP /1.1
    console.log('!!!!!!!!!!!!!!!!!', element) // = 404,hydrogen etc..
    let requestURI = data.split('', 2)[1]; //Takes out the resource from the long request string
    console.log('??????????', requestURI)
    let index = requestURI.indexOf('/'); // = 0;
    console.log('|||||||||||', index)
    let url = requestURI.slice(index); //Removes whatevers was before '/'
    console.log('::::::::::: ',requestURI);
    console.log('>>>>><<<<<<<<<<: ', url);

    //proccess request and response here ^^^
    //concat head and body and send that to the client.
    let response = '';

    response = response.concat(`http/1.1 200 OK\n`);
    response = response.concat(`content type: text/html\n`);
    response = response.concat(`\n`);
    response = response.concat(element.hydrogen);
    console.log(response);

    socketInstance.write(response);

    socketInstance.end(); //final step
  });

  socketInstance.on('end', () => {
    console.log('client disconnected')
  });




});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});