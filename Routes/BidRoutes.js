import express from 'express'
import bidController from '../Controllers/BidController'

const router = express.Router()

router.get('/getPetBids/:petId', bidController.getPetBids)

router.get('/getWinnerBidders/:petId', bidController.getWinnerBidders)

router.post('/bidOnPet', bidController.bidOnPet)

module.exports = router;


