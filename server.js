const express = require('express')
const dotenv = require('dotenv')

// Load env variable:
dotenv.config({ path: './config/config.env' })

const app = express();
const PORT = process.env.PORT || 5008

// Routes
// 01. All bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success: true, 
        message: "Show all bootcamps"
    });
})

// 02. Show a single bootcamp
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Get a bootcamp with ${req.params.id}`
    });
})

// 03. Create a new bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Create a new bootcamp`
    });
})

// 04. Update a bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Update a bootcamp with ${req.params.id}`
    });
})

// 03. Delete a bootcamp
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Delete a bootcamp with ${req.params.id}`
    });
})



app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
