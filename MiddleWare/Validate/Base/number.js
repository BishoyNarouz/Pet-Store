import validator from 'validator'
import errors from '../../Errors/index'

module.exports = function ({ number, fieldName, optional } = {}) {
    if (!optional) {
        if (!number) {
            throw new errors.Missing({ fieldName })
        } else if ((typeof number !== 'number')) {
            throw new errors.Invalid({ message: `${fieldName} must be Number` })
        }
    } else if (optional) {
        if (!number) {
            return
        } else if (typeof number !== 'number') {
            throw new errors.Invalid({ message: `${fieldName} must be Number` })
        }
    }

    return number
}
