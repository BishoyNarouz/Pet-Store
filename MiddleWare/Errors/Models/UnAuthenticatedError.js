import BaseError from './BaseError'
import ErrorType from '../../../Enums/ErrorTypeEnum'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class UnAuthenticatedError extends BaseError {
    constructor() {
        super({ status: ErrorCode.UNAUTHENTICATED })
        this.Message = ErrorType.UNAUTHENTICATED
    }
}

module.exports = UnAuthenticatedError
