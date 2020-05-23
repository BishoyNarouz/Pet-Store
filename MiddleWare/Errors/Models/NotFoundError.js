import BaseError from './BaseError'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class NotFound extends BaseError {
    constructor({ message } = {}) {
        super({ status: ErrorCode.NOT_FOUND })
        this.Message = message
    }
}

module.exports = NotFound
