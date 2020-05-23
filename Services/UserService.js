import axios from 'axios'
import errors from '../MiddleWare/Errors/index'
const userService = {}


userService.getUserByUsername = async function (username) {
    try {
        const result = await axios.get(`https://petstore.swagger.io/v2/user/${username}`)
        return (result && result.data) ? result.data : null
    } catch (err) {
        throw new errors.NotFound({ message: 'user is not found' })
    }
}

module.exports = userService