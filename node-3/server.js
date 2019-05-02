const http = require('http')

http.createServer((req, res) => {
  setTimeout(() => {
    res.end('Hello, World!')
  }, 100)
}).listen(8000)

// Создать локальный веб сервер `server`, отвечающий на запросы каждые 100ms

// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   console.log(req.url, 'req url')
//   setTimeout(function () {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World\n')
//   }, 100)

// })

// server.on('request', function (req, res) {
//   console.log('Connection');
//   console.log(req.method);

//   res.end();
// })

// server.listen(port, hostname, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//   console.log(`Server running at http://${hostname}:${port}/`)
// })