import Bid from '../../Database/Models/Bid'
import errors from '../../MiddleWare/Errors/index'

let bidRepository = {}

bidRepository.create = async (bid) => {
    let result = await Bid.create(bid)
    return result
}

bidRepository.findByPetId = async (petId) => {
    let result = await Bid.find({ petId: petId }, { username: 1, money: 1 }).sort({ money: -1 })
    return result
}

bidRepository.findMaxBidValue = async () => {
    let result = await Bid.find().sort({ bidValue: -1 }).limit(1)
    return result.length > 0 ? result[0] : null
}

bidRepository.findBidsOfPet = async (petId) => {
    let result = await Bid.find({ petId: petId }, { bidValue: 1, username: 1, _id: 0 })
    return result
}

bidRepository.findMaxFourBids = async (petId) => {
    let result = await Bid.find({ petId: petId }, { bidValue: 1, username: 1, _id: 0 }).limit(4)
    return result
}



module.exports = bidRepository