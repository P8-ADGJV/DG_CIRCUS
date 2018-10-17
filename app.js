const net = require('net')

//SERVER
let server = net.createServer((socket) => {
    console.log('client connected : ' + socket.remoteAddress)
    socket.write('HI !');
    socket.on('end', () => {
        console.log('client disconected');
    });
    socket.on('data', (data) => {
        console.log('received : ' + data);
    })
});
server.listen(55555, () => {
    console.log('server open');
});


///CLIENT
let client = net.createConnection({
    port: 55555,
    //host:'37.59.57.203
    host:'localhost'
}, () => {
    // 'connect' listener
    console.log('connected to server!');
    client.write('HELO\n');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});