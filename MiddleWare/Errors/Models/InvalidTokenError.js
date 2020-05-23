import BaseError from './BaseError'
import ErrorType from '../../../Enums/ErrorTypeEnum'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class InvalidToken extends BaseError {
    constructor() {
        super({ status: ErrorCode.UNAUTHENTICATED })
        this.Message = ErrorType.INVALID_TOKEN
    }
}

module.exports = InvalidToken
