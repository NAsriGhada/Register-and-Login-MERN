const isEmpty = require('./isEmpty')
const validator = require('validator')



module.exports = function validateRegister(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ""
    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password) ? data.password : ""
    data.confirm = !isEmpty(data.confirm) ? data.confirm : ""

    if(validator.isEmpty(data.name)){
        errors.name = "Name is required"
    }
    // if(!validator.isEmpty(data.email)){
    //     errors.email = "Email format is required"
    // }
    if(!validator.isEmail(data.email)){
        errors.email = "Email format is required"
    }
    if(validator.isEmpty(data.email)){
        errors.email = "Email is required"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }
    if(!validator.equals(data.password, data.confirm)){
        errors.confirm = "Passwords do not match"
    }
    if(validator.isEmpty(data.confirm)){
        errors.confirm = "You need to confirm password"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}