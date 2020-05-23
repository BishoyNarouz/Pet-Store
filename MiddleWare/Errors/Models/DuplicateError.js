import BaseError from './BaseError'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class DuplicateError extends BaseError {
    constructor({ message } = {}) {
        super({ status: ErrorCode.MISSING })
        this.Message = message
    }
}

module.exports = DuplicateError;
