module.exports = function(app) {
  let productController = require('./controllers/ProductsController');

  app.route('/products')
    .get(productController.get)
    .post(productController.store);

  app.route('/products/:productId')
    .get(productController.detail)
    .put(productController.update)
    .delete(productController.delete);
}
