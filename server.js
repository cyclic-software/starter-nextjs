const next = require('next')
const { createServer } = require('http')

// init next
const app = next(__dirname)
const handle = app.getRequestHandler()

// init normal http server
createServer(handle).listen(process.env.PORT || 3000)
