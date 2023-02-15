const errorHandler = (err, req, res, next) => {
       const errStatus = err.statusCode || 500;
       const message = err.message || ' Error';

       res.status(errStatus).send({
              success: false,
              status: errStatus,
              message: message,
              stack: process.env.NODE_ENV




              // success: false
              // status: (err)
              // message:
              // env:

       })

}
module.exports = errorHandler;