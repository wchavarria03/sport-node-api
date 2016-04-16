/**
 * Created by Walter on 16/04/2016.
 */
module.exports = {
    'fatalError': {
        message:'Unknown Serious Error',
        code: 1
    },
    'required': {
        message:'is required',
        code: 2
    },
    'min': {
        message:' below minimum',
        code: 3
    },
    'max': {
        message:' above maximum',
        code: 4
    },
    'enum': {
        message:'s not an allowed value',
        code: 5
    },
    'unAuthorized': {
        message:'Invalid Token',
        code: 6
    },
    'castError': {
        message:'Cast Error [Incomplete Error]',
        code: 7
    }
};