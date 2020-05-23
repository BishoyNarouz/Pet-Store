import BaseError from './BaseError'
import ErrorType from '../../../Enums/ErrorTypeEnum'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class ExpiredTokenError extends BaseError {
    constructor() {
        super({ status: ErrorCode.UNAUTHENTICATED })
        this.Message = ErrorType.TOKEN_EXPIRED_ERROR
    }
}

module.exports = ExpiredTokenError
