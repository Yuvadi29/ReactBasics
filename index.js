const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //Request can be sent and read in JSON format

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
