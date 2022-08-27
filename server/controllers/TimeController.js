
const Product = require("../models/TimeModel");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.timeId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        task: req.body.task,
        time: req.body.time,
        projectManagement: req.body.projectManagement,
        notes: req.body.notes
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
            task: req.body.task,
            time: req.body.time,
            projectManagement: req.body.projectManagement,
            notes: req.body.notes
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.timeId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.timeId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }