import errors from '../../Errors/index'
import userRepository from '../../../Database/Repositories/UserRepository'

module.exports = function () {
    return function (req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers['token']
        if (token && token.startsWith('Bearer ')) {
            token = token.slice(7, token.length)
        }
        if (token) {
            let users = userRepository.getAllUsers()
            if (users.find((user) => user.authorization === token)) {
                req.user = users.find((user) => user.authorization === token);
                next()
            }
            else if (users.find((user) => user.deviceToken === token)) {
                req.user = users.find((user) => user.deviceToken === token);
                next()
            }
            else if (users.find((user) => user.fingerPrint === token)) {
                req.user = users.find((user) => user.fingerPrint === token);
                next()
            }
            else {
                res.send(new errors.InvalidTokenError())
            }
        }
        else {
            res.send(new errors.UnAuthenticatedError())
        }
    }
}