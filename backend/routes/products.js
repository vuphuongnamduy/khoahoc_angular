const express = require("express");
const router = express.Router();
const db = require("../database/db");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  let startValue;
  let endValue;

  if (page > 0) {
    startValue = page * limit - limit; // 0,10,20,30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }

  db.query(
    `SELECT p.id, p.title, p.image, p.price, p.short_desc, p.quantity,
        c.title as category FROM products p JOIN categories c ON
            c.id = p.cat_id LIMIT ${startValue}, ${limit}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});

// GET SINGLE PRODUCT BY ID
router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  db.query(
    `SELECT p.id, p.title, p.image, p.images, p.description, p.price, p.quantity, p.short_desc,
        c.title as category FROM products p JOIN categories c ON
            c.id = p.cat_id WHERE p.id = ${productId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});

// Thêm sản phẩm mới
router.post("/", async (req, res) => {
  const {
    title,
    image,
    images,
    description,
    price,
    quantity,
    short_desc,
    cat_id
  } = req.body;

  // Thực hiện câu truy vấn để thêm sản phẩm vào cơ sở dữ liệu
  db.query(
    "INSERT INTO products (title, image, images, description, price, quantity, short_desc, cat_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [title, image, images, description, price, quantity, short_desc, cat_id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Lỗi khi thêm sản phẩm");
      } else {
        res.status(201).send("Sản phẩm đã được thêm thành công");
      }
    }
  );
});

// Sửa sản phẩm theo ID
router.put("/:productId", async (req, res) => {
  const { productId } = req.params;
  const {
    title,
    image,
    images,
    description,
    price,
    quantity,
    short_desc,
    cat_id
  } = req.body;

  // Thực hiện câu truy vấn để sửa sản phẩm trong cơ sở dữ liệu
  db.query(
    "UPDATE products SET title=?, image=?, images=?, description=?, price=?, quantity=?, short_desc=?, cat_id=? WHERE id=?",
    [title, image, images, description, price, quantity, short_desc, cat_id, productId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Lỗi khi sửa sản phẩm");
      } else {
        res.status(200).send("Sản phẩm đã được sửa thành công");
      }
    }
  );
});

// Xóa sản phẩm theo ID
router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;

  // Thực hiện câu truy vấn để xóa sản phẩm khỏi cơ sở dữ liệu
  db.query(
    "DELETE FROM products WHERE id=?",
    [productId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Lỗi khi xóa sản phẩm");
      } else {
        res.status(200).send("Sản phẩm đã được xóa thành công");
      }
    }
  );
});

module.exports = router;
