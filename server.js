const express = require('express')
const dotenv = require('dotenv')

// Route files:
const bootcamps = require('./routes/bootcamps');

// Load env variable:
dotenv.config({ path: './config/config.env' })

const app = express();

// Mount routes:
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5008

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
