const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Simulated asynchronous error'));
        }
      }, 1000);
    });
  };

  asyncOperation()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      // Handle error improperly, without proper logging or status code
      console.error('Error:', error);
      res.end(); //Missing proper error handling
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});