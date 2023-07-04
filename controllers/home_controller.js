const Data = require("../data/index");
const Products = Data.Products;
const Categories = Data.Categories;
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const Client_Domain = "http://localhost:5173";

module.exports.fetchSingleProducts = async function (req, res) {
  let product = Products.find((product) => {
    return product.id === Number(req.params.id);
  });

  return res.json({
    success: true,
    product,
  });
};

module.exports.fetchAllProducts = async function (req, res) {
  return res.json({
    success: true,
    products: Products,
  });
};

module.exports.fetchRelatedProducts = async function (req, res) {
  let targetProduct = Products.find((product) => {
    return product.id === Number(req.params.id);
  });

  let products = [];
  for (let product of Products) {
    if (product.category == targetProduct.category) {
      if (product.id != targetProduct.id && products.length < 4) {
        products.push(product);
      }
    }
  }

  return res.json({
    success: true,
    products,
  });
};

module.exports.fetchProductByKeyword = async function (req, res) {
  const keyword = req.query.keyword;
  const keywordInLower = keyword.toLowerCase();

  let products = Products.filter((product) => {
    if (
      product.title.toLowerCase().includes(keywordInLower) ||
      product.config.toLowerCase().includes(keywordInLower)
    ) {
      return {
        id: product.id,
        title: product.title,
        image: product.image,
        config: product.config,
      };
    }
  });

  return res.json({
    success: true,
    products,
  });
};

module.exports.fetchAllCategories = async function (req, res) {
  return res.json({
    success: true,
    categories: Categories,
  });
};

module.exports.fetchProductsByCategory = async function (req, res) {
  let targetCategory = Categories.find((category) => {
    return category.categoryId === Number(req.params.categoryId);
  });

  let requestedProducts = Products.filter(
    (product) => product.category == targetCategory.title
  );

  return res.json({
    success: true,
    products: requestedProducts,
  });
};

module.exports.initiatePayment = async function (req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${Client_Domain}/payment/true`,
      cancel_url: `${Client_Domain}/payment/false`,
    });
    return res.json({ url: session.url });
  } catch (err) {
    return res.json({ success: false, ...err });
  }
};
