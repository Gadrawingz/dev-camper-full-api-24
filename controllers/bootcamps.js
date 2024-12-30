/* 
@uses  : Get all bootcamps
@route : GET /api/v1/bootcamps
@access: Public
*/
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true, 
        message: 'Fetch all bootcamps'
    });
}

/* 
@uses  : Get a single bootcamp
@route : GET /api/v1/bootcamps/:id
@access: Public
*/
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true, 
        message: `Get a single bootcamp with ${req.params.id}`
    });
}


/* 
@uses  : Create new bootcamp
@route : POST /api/v1/bootcamps/
@access: Private
*/
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true, 
        message: `Create a new bootcamp`
    });
}

/* 
@uses  : Update bootcamp
@route : PUT /api/v1/bootcamps/:id
@access: Private
*/
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true, 
        message: `Update a bootcamp with ${req.params.id}`
    });
}


/* 
@uses  : Delete bootcamp
@route : DELETE /api/v1/bootcamps/:id
@access: Private
*/
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true, 
        message: `Remove a bootcamp with ${req.params.id}`
    });
}