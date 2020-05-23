import mongoose from 'mongoose'
import config from '../Config'

module.exports = (function () {
    mongoose.connect(config.DBUrl, { useNewUrlParser: true, autoIndex: false, useFindAndModify: false, useUnifiedTopology: true })
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
    })
})()

