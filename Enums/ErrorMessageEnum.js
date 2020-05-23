const ErrorMessageEnum =
{
    UNAUTHORIZED: 'UNAUTHORIZED',
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    INVALID_TOKEN: 'INVALID_TOKEN',
    TOKEN_EXPIRED_ERROR: 'TOKEN_EXPIRED_ERROR',
    REQUIRED: 'REQUIRED',
    BAD_REQUEST: 'BAD_REQUEST',
    INVALID_ROLE: 'User Role is not valid',
    USER_IS_DUPLICATED: 'Username or Email Already Exists',
    USER_IS_NOT_FOUND: 'User is not found',
    USER_IS_BLOCKED: 'User is blocked',
    CURRENT_PASSWORD_INCORRECT: 'Current Password is not correct',
    INVALID_RESET_PASSWORD_CODE: 'Password Code is not valid',
    INVALID_CREDENTIAL: 'Invalid Credential',
    CATEGORY_IS_NOT_FOUND: 'Category is not found',
    CATEGORY_IS_DUPLICATED: 'Category Already Exists',
    FOLDER_IS_NOT_FOUND: 'Folder is not found',
    FOLDER_IS_DUPLICATED: 'Folder Already Exists',
    FILE_IS_NOT_FOUND: 'File is not found',
    FILE_IS_DUPLICATED: 'File Already Exists',
    CLIP_IS_DUPLICATED: 'Clip Already Exists',
    CLIP_IS_NOT_FOUND: 'Clip is not found',
    CLIP_IS_RELATED_TO_ANOTHER_FOLDER: 'Clip is related to another folder',
    FOLDER_IS_NOT_RELATED_TO_CLIP: 'folder is not related to clip',
    FILE_NAME_IS_DUPLICATED: 'File Name Already Exists',
    FOLDER_LINKED_BY_CLIP: 'Folder linked by clip',
    FOLDER_RELATED_TO_ANOTHER_FILES: 'Folder is related to another files',
    EMAIL_IS_NOT_FOUND: 'Email is not found',
    INVALID_USER_ROLE: 'Invalid User Role',
    INVALID_LANGUAGE: 'Invalid Language'
}

module.exports = ErrorMessageEnum