class DeliveryController {
  constructor () {
    this.renderDispatchPrice = this.renderDispatchPrice.bind(this)
  }

  getDispatchPrice (articlesQty, zone) {
    const pricePerZone = {
      north: 3000,
      center: 8000,
      south: 2000
    }
    // Por cada artículo se multiplica el precio del despacho
    return articlesQty * pricePerZone[zone]
  }

  renderDeliveryForm (req, res) {
    res.render('delivery-form')
  }

  renderDispatchPrice (req, res) {
    const articlesQty = parseInt(req.body.articlesQty)
    const zone = req.body.zone

    res.render('dispatch-price', {
      articlesQty,
      totalPrice: this.getDispatchPrice(articlesQty, zone)
    })
  }
}

module.exports = DeliveryController
