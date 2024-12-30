const express = require("express");
const router = express.Router();

// 01. All bootcamps
router.get('/', (req, res) => {
    res.status(200).json({
        success: true, 
        message: "Show all bootcamps"
    });s
})

// 02. Show a single bootcamp
router.get('/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Get a bootcamp with ${req.params.id}`
    });
})

// 03. Create a new bootcamp
router.post('/', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Create a new bootcamp`
    });
})

// 04. Update a bootcamp
router.put('/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Update a bootcamp with ${req.params.id}`
    });
})

// 05. Delete a bootcamp
router.delete('/:id', (req, res) => {
    res.status(200).json({
        success: true, 
        message: `Delete a bootcamp with ${req.params.id}`
    });
})

module.exports = router;