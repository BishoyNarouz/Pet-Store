import bidRepository from '../Database/Repositories/BidRepository'
import Success from '../MiddleWare/Errors/Models/SuccessResponse'
import userService from '../Services/UserService'
import petService from '../Services/PetService'
import errors from '../MiddleWare/Errors/index'
import validate from '../MiddleWare/Validate/index'

let bidController = {}

bidController.getPetBids = async function (req, res, next) {
    try {
        let bids = await bidRepository.findBidsOfPet(req.params.petId)
        if (bids.length <= 0) {
            throw new errors.NotFound({ message: 'pet not found' })
        }
        res.status(200).send(new Success(bids))
    } catch (error) {
        res.status(404).send(error)
    }
}

bidController.getWinnerBidders = async function (req, res, next) {
    try {
        let bids = await bidRepository.findMaxFourBids(req.params.petId)
        if (bids.length <= 0 || bids.length == 1) {
            throw new errors.NotFound({ message: 'No Winners' })
        }
        let winners = [];
        for (let i = 0; i < bids.length; i++) {
            winners.push({ username: bids[i].username, price: i === 0 ? 'Lost' : bids[i - 1].bidValue })
        }
        res.status(200).send(new Success(winners))
    } catch (error) {
        res.status(404).send(error)
    }
}

bidController.bidOnPet = async function (req, res, next) {
    try {
        validate.validateString({ string: req.body.username, fieldName: 'Username', optional: false })
        validate.validateNumber({ number: req.body.petId, fieldName: 'Pet Id', optional: false })
        validate.validateNumber({ number: req.body.bidValue, fieldName: 'Bid', optional: false })

        const user = await userService.getUserByUsername(req.body.username)
        const pet = await petService.getPetById(req.body.petId)

        let maxBid = await bidRepository.findMaxBidValue()
        if (maxBid && maxBid.bidValue && maxBid.bidValue >= req.body.bidValue) {
            throw new errors.Invalid({ message: `bid must be greater than ${maxBid.bidValue}` })
        }

        let bid = await bidRepository.create({ petId: req.body.petId, username: req.body.username, bidValue: req.body.bidValue })
        res.status(201).send(new Success(bid))
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = bidController