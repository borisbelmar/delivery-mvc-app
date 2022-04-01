class PageController {
  renderHome (req, res) {
    res.render('home')
  }

  renderNotFound (req, res) {
    res.render('404')
  }
}

module.exports = PageController
