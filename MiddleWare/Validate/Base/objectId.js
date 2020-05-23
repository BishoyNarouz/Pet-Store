import validator from 'validator'
import errors from '../../Errors/index'

module.exports = function objectId({ objectId, fieldName, optional } = {}) {
    if (!optional) {
        if (!objectId) {
            throw new errors.Missing({ fieldName })
        } else if (typeof objectId !== 'string') {
            throw new errors.Invalid({ message: `${fieldName} must be String` })
        } else if (!validator.isMongoId(objectId)) {
            throw new errors.Invalid({ message: `${fieldName} is not valid` })
        }
    }
    else if (optional) {
        if (!objectId) {
            return;
        }
        else if ((typeof objectId !== 'string') || !validator.isMongoId(objectId)) {
            throw new errors.Invalid({ message: `${fieldName} is not valid` })
        }
    }

    return objectId;
};

