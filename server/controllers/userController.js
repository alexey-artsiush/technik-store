const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

class UserController {
    async registration(req, res) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email/password'))
        }
        const candidates = await User.findOne({where: {email}})
        if (candidates) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
    }

    async login(req, res) {

    }

    async check(req, res, next) {
       const {id} = req.query
       if(!id) {
        return next(ApiError.badRequest('Не задан ID'))
       }
       res.json(id)
    }
}

module.exports = new UserController()