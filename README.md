# Social App API

This is an express.js api providing various products data for e-commerce website.

## Tech Stack

`NodeJS` `Express`

## Run Locally

To run this project locally follow these steps :

1. Clone the project

```bash
  git clone https://github.com/antu99g/Social-api
```

2. Go to the project directory

```bash
  cd Social-api
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm start
```

## API Reference

Add current domain of the server as prefix to each route

| Description                | Method | Route                      |
| :------------------------- | :----- | :------------------------- |
| Fetch product by id        | `GET`  | `/:id/product`             |
| Fetch all products         | `GET`  | `/products`                |
| Fetch related products     | `GET`  | `/:id/related-products`    |
| Fetch products by keyword  | `GET`  | `/products/search`         |
| Fetch all categories       | `GET`  | `/categories`              |
| Fetch products by category | `GET`  | `/:categoryId/products`    |
| Payment                    | `POST` | `/create-checkout-session` |

## Environment Variables

To run this project, you will need to add the following environment variables in your .env file

`STRIPE_PRIVATE_KEY` : to integrate stripe for payment
