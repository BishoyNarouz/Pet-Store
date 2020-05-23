import BaseError from './BaseError'
import ErrorCode from '../../../Enums/ErrorCodeEnum'

class BackendCodeError extends BaseError {
    constructor() {
        super({ status: ErrorCode.INTERNAL_SERVER_ERROR })
        this.Message = message
    }
}

module.exports = BackendCodeError;
