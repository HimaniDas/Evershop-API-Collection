# Evershop API Collection111

This repository contains a Postman collection for testing and interacting with the **Evershop API**. The collection includes API requests for searching products, managing the cart, and handling purchases.

## 🛠 Features
- **Search API**: Retrieve products based on search keywords.
- **Cart Management**: View, add, and remove products from the cart.
- **Order Processing**: Add products to the cart and verify response data.
- **Automated Tests**: Includes predefined tests to validate API responses.
## 📂 Collection Structure
The Postman collection consists of the following API requests:

1. **Search**
   - Endpoint: `GET https://demo.evershop.io/search?keyword={{searchText}}&ajax=true`
   - Description: Fetches product details based on a search keyword.
   - Test Cases:
     - Checks if the response status is `200 OK`.
     - Verifies the product name in the response.

2. **View Previous Cart**
   - Endpoint: `GET https://demo.evershop.io/cart?ajax=true`
   - Description: Fetches cart details before adding a new product.
   - Test Cases:
     - Checks if the response status is `200 OK`.

3. **Add Product to Cart**
   - Endpoint: `POST https://demo.evershop.io/api/cart/mine/items?ajax=true`
   - Description: Adds a product to the cart using a random SKU.
   - Test Cases:
     - Validates product SKU and quantity in the cart.

4. **View Updated Cart**
   - Endpoint: `GET https://demo.evershop.io/cart?ajax=true`
   - Description: Retrieves the updated cart details after adding a product.

5. **Remove Product from Cart**
   - Endpoint: `DELETE https://demo.evershop.io{{cart_url}}`
   - Description: Removes a specific product from the cart.
  
  ## 🚀 Installation & Usage
1. **Import the Collection into Postman**
   - Open Postman.
   - Click **Import**.
   - Select the `Evershop_API_Collection_postman_collection.json` file.

2. **Set Up Variables**
   - The collection uses **Postman variables** such as:
     - `searchText`
     - `selected_sku`
     - `selected_qty`
     -  Ensure they are properly set before making requests.

3. **Run the Collection**
   - Click **Run Collection** in Postman to test all endpoints sequentially.

 ## 🛠 Technologies Used
   Language: JavaScript (for Postman test scripts)
   Tools: Postman, GitHub
   Apps: Evershop API

## 📌 How to Use
   1. Run API requests in Postman
   Select any request from the collection and hit "Send" to get the response.
   2. Modify search keywords
   Update the variable searchText to find different products.
   3. Validate responses
   The test scripts automatically verify response status codes and values.

 ### 1️⃣ Prerequisites
     ** Postman ** installed ([Download here](https://www.postman.com/downloads/))
     ** Git ** (optional, for cloning the repo)
