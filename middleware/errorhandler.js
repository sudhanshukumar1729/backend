const {constants} = require('../constant');

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json(
            {
                title: "Fill the required fields",
                message: err.message,
                stack: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stack: err.stack
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stack: err.stack
            });
            break;
    }
    
}

module.exports = {errorHandler};