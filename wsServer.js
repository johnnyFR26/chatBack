
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received: ${message}`);

    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Olá! Você está conectado ao servidor WebSocket!');
});