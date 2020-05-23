module.exports = class AppError extends Error {
    constructor({ status } = {}) {
        // Calling parent constructor of base Error class.
        super()

        this.ErrorType = this.constructor.name
        this.Status = status || 500
        this.Success = false
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor)
    }

}