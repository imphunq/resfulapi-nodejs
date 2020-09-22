const database = require('./../database');

module.exports = {
  get: (req, res) => {
    let sql = 'SELECT * FROM products';
    database.query(sql, (err, response) => {
      if (err) throw err;
      console.log(response);
      res.json(response);
    })
  },

  detail: (req, res) => {
    let sql = 'SELECT * FROM products WHERE id = ?';
    database.query(sql, [req.params.productId], (err, response) => {
      if(err) throw err;
      res.json(response);
    })
  },

  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;

    let sql = 'UPDATE products SET ? WHERE id = ?';
    database.query(sql, [data, productId], (err, response) => {
      if(err) throw err;
      res.json({message: 'Update success'});
    });
  },

  store: (req, res) => {
    let data = req.body;
    let sql = 'INSERT INTO products SET ?';
    console.log(data);
    database.query(sql, [data], (err, response) => {
      if (err) throw err
      res.json({message: 'Insert success'});
    })
  },

  delete: (req, res) => {
    let id = req.params.productId;
    let sql = 'DELETE FROM products WHERE id = ?';
    database.query(sql, [id], (err, response) => {
      if (err) throw err;
      res.json({message: 'Delete success'});
    });
  }
}
