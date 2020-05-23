import axios from 'axios'
import errors from '../MiddleWare/Errors/index'
const petService = {}


petService.getPetById = async function (petId) {
    try {
        const result = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`)
        return (result && result.data) ? result.data : null
    } catch (err) {
        throw new errors.NotFound({ message: 'pet is not found' })
    }
}

module.exports = petService