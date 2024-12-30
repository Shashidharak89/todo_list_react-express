const express = require('express')
const cors = require('cors')
const TodoRoutes = require('./routes/crud')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/mytodo/api/v1/', TodoRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is listening on ${process.env.PORT || 3000}`);
}) 