const { body, validationResult } = require('express-validator');

exports.checkAuth = [
       body('email').isEmail().withMessage('email not valid'),
       body('password').isStrongPassword({
              minLength: 8,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 1,
              returnScore: false,
              pointsPerUnique: 1,
              pointsPerRepeat: 1,
              pointsForContainingLower: 1,
              pointsForContainingUpper: 1,
              pointsForContainingNumber: 1,
              pointsForContainingSymbol: 1
       }).withMessage('wreite a stroger pass')
]

exports.checkIdentity = [
       body('firstName').isAlphanumeric().isLength({
              min: 2,
              max: 50
       }).withMessage('name wrong format').notEmpty()
]

exports.checkIdentity = [
       body('lastName').isAlphanumeric().isLength({
              min: 2,
              max: 50
       }).withMessage('name wrong format').notEmpty()
]


exports.validation = (req, res, next) => {
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
       }
       next();

}