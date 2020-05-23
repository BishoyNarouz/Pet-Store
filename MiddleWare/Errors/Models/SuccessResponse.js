module.exports = class SuccessResponse {
    constructor(Data = {}) {
        this.Status = 200
        this.Success = true
        this.Message = 'Operation Successed'
        this.Data = Data || null
    }

}