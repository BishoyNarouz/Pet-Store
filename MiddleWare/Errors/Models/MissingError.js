import BaseError from './BaseError'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class Missing extends BaseError {
    constructor({ fieldName } = {}) {
        super({ status: ErrorCode.MISSING })
        this.Message = `${fieldName} is Required`
    }
}

module.exports = Missing
