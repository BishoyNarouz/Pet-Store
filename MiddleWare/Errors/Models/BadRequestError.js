import BaseError from './BaseError'
import ErrorCode from '../../../Enums/ErrorCodeEnum'
import ErrorType from '../../../Enums/ErrorTypeEnum'

class BadRequestError extends BaseError {
    constructor() {
        super({ status: ErrorCode.BAD_REQUEST })
        this.Message = ErrorType.BAD_REQUEST
    }
}

module.exports = BadRequestError;
