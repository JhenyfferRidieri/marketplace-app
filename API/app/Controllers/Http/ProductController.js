'use strict'

const ProductService = use('App/Services/ProductService');

class ProductController {
  async index({ response }) {
    const products = await ProductService.findAll();
    return response.json(products);
  }

  async filterByCategory({ params, response }) {
    const { category } = params;
    const filtered = await ProductService.findByCategory(category);
    return response.json(filtered);
  }

  async findByName({ params, response }) {
    const { name } = params;
    const product = await ProductService.findByName(name);
    if (product) {
      return response.json(product);
    } else {
      return response.status(404).json({ message: 'Produto não encontrado' });
    }
  }
}

module.exports = ProductController;
