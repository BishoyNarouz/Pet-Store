import InvalidTokenError from './Models/InvalidTokenError'
import UnAuthenticatedError from './Models/UnAuthenticatedError'
import UnAuthorizedError from './Models/UnAuthorizedError'
import ExpiredTokenError from './Models/ExpiredTokenError'
import Missing from './Models/MissingError'
import BadRequestError from './Models/BadRequestError'
import DuplicateError from './Models/DuplicateError'
import Invalid from './Models/InvalidError'
import BackendCode from './Models/BackendCodeError'
import NotFound from './Models/NotFoundError'

module.exports = {
    InvalidTokenError: InvalidTokenError,
    UnAuthenticatedError: UnAuthenticatedError,
    UnAuthorizedError: UnAuthorizedError,
    ExpiredTokenError: ExpiredTokenError,
    Missing: Missing,
    BadRequestError: BadRequestError,
    DuplicateError: DuplicateError,
    Invalid: Invalid,
    BackendCode: BackendCode,
    NotFound: NotFound
}