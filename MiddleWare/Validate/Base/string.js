import validator from 'validator'
import errors from '../../Errors/index'

/* Validates a string is valid according a set of criteria */
module.exports = function string({ string, fieldName, optional, min, max, language } = {}) {
    if (!optional) {
        if (!string) {
            throw new errors.Missing({ fieldName })
        } else if (typeof string !== 'string') {
            throw new errors.Invalid({ message: `${fieldName} must be String` })
        }
    }
    else if (optional) {
        if (string === undefined) {
            return;
        }
        else if (string === null) {
            return null;
        }
        else if (typeof string !== 'string') {
            throw new errors.Invalid({ message: `${fieldName} must be String` })
        }
    }

    if (max && string.length > max)
        throw new errors.Invalid({ message: `${fieldName} exceeds the maximum length` })

    if (min && string.length < min)
        throw new errors.Invalid({ message: `${fieldName} is less than the minimum length` })

    let validateString = string.replace(/\s/g, '')
    if (language && language === 'en') {
        if (!validator.isAlphanumeric(validateString))
            throw new errors.Invalid({ message: `${fieldName} in English is invalid` })
    }
    else if (language && language === 'ar') {
        if (!validator.isAlphanumeric(validateString, 'ar'))
            throw new errors.Invalid({ message: `${fieldName} in Arabic is invalid` })
    }

    return string
}
