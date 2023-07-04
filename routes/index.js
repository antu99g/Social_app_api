const express = require("express");
const router = express.Router();

console.log("router loaded");

const homeController = require("../controllers/home_controller");

// Route to get product by id
router.get("/:id/product", homeController.fetchSingleProducts);

// Route to get all products
router.get("/products", homeController.fetchAllProducts);

// Route to get related products
router.get("/:id/related-products", homeController.fetchRelatedProducts);

// Route to get searched products
router.get("/products/search", homeController.fetchProductByKeyword);

// Route to get all categories
router.get("/categories", homeController.fetchAllCategories);

// Route to get all products of a category
router.get("/:categoryId/products", homeController.fetchProductsByCategory);

// Route for payment
router.post("/create-checkout-session", homeController.initiatePayment);

module.exports = router;
