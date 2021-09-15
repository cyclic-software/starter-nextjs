const next = require('next')
const http = require('http')

// init next
const app = next(__dirname)
const handle = app.getRequestHandler()

// init normal http server
// createServer(handle).listen(process.env.PORT || 3000)



// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.set('transfer-encoding', '')
  handle(req,res)
});

server.listen(process.env.PORT || 3000);
