import mongoose from 'mongoose'

const bidSchema = new mongoose.Schema({
    petId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    bidValue: {
        type: Number,
        required: true
    }
}, { timestamps: { createdAt: true, updatedAt: false, versionKey: false } })

bidSchema.index({ petId: 1, bidValue: 1 })

const Bid = mongoose.model('Bid', bidSchema)

module.exports = Bid