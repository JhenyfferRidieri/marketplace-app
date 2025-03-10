'use strict'

const fs = require('fs');
const path = require('path');

class ProductController {
  
  async getProducts() {
    const dataPath = path.join(__dirname, '../../../database/data.json');
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
  }

  async index({ response }) {
    const products = await this.getProducts();
    return response.json(products);
  }

  async filterByCategory({ params, response }) {
    const { category } = params;
    const products = await this.getProducts();
    const filtered = products.filter(product => product.type.toLowerCase() === category.toLowerCase());
    return response.json(filtered);
  }

  async findByName({ params, response }) {
    const { name } = params;
    const products = await this.getProducts();
    const product = products.find(product => product.name.toLowerCase() === name.toLowerCase());
    if (product) {
      return response.json(product);
    } else {
      return response.status(404).json({ message: 'Produto não encontrado' });
    }
  }
}

module.exports = ProductController;
