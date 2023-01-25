const app = require('./server')

app.use('/', require("./src/routes/usersRoutes"))
app.use('/login', require("./src/routes/sessionRoutes"))
app.use('*', (req, res) => res.status(404).send(console.log({ message: "Page Not found" })))

module.exports = app;