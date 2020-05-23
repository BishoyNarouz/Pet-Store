import BaseError from './BaseError'
import ErrorType from '../../../Enums/ErrorTypeEnum'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class UnAuthorizedError extends BaseError {
    constructor() {
        super({ status: ErrorCode.UNAUTHORIZED })
        this.Message = ErrorType.UNAUTHORIZED
    }
}

module.exports = UnAuthorizedError
