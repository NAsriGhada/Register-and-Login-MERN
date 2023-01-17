const userModel = require('../models/user.model')
const validateRegister = require('../validations/register')
const bcrypt = require('bcryptjs')

const register = async(req, res) => {
    const {errors, isValid} = validateRegister(req.body)
    try {
        if(!isValid){
            res.status(404).json(errors)
        }else{
            // req.body.role = "USER"
            // const data = await userModel.create(req.body)
            // res.status(200).json({data: data})
            userModel.findOne({email: req.body.email})
            .then(async (emailExists) => {
                if(emailExists){
                    errors.email = "Email or user exists"
                    res.status(404).json(errors)
                }else{
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    req.body.password = hash
                    req.body.role = "USER"
                    const data = await userModel.create(req.body)
                    res.status(200).json({
                        msg:"data have been submitted successfuly to database", 
                        data: data
                    })
                }
            })
        }
        
    } catch (error) {
        res.status(404).json(error.message)
    }
}



module.exports = {
    register
}