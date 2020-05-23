const env = typeof process.env.NODE_ENV === 'undefined' ? 'local' : process.env.NODE_ENV
const config = require(`./${env}`)
module.exports = {
    BackendHost: config.BackendHost,
    BackendPort: config.BackendPort,
    BackendUrl: config.BackendUrl,
    DBUrl: config.DBUrl,
    corsOptions: {
        origin: '*',
        optionsSuccessStatus: 200
    },
    RequestSizeLimit: '10mb',
    swaggerOptions: config.swaggerOptions
}