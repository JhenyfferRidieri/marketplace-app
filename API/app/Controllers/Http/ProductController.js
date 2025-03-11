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

  async getProductDetails({ params, response }) {
    return await this.findByName({ params, response });
  }

  async getCategories({ response }) {
    const categories = await ProductService.getCategories();
    return response.json(categories);
  }

  async filterProducts({ request, response }) {
    const filters = request.get(); // Captura os filtros da query string
    const filteredProducts = await ProductService.filterProducts(filters);
    return response.json(filteredProducts);
  }

  async paginatedProducts({ request, response }) {
    const { page, limit } = request.get();
    const products = await ProductService.paginateProducts(parseInt(page) || 1, parseInt(limit) || 10);
    return response.json(products);
  }
  
}

module.exports = ProductController;