const express = require('express')
const PageController = require('./controllers/PageController')
const DeliveryController = require('./controllers/DeliveryController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const deliveryController = new DeliveryController()

// Routes
router.get('/', deliveryController.renderDeliveryForm)
router.post('/', deliveryController.renderDispatchPrice)

router.get('*', pageController.renderNotFound)

module.exports = router
