'use strict'

const fs = require('fs');
const path = require('path');

class ProductService {
  static getDataFilePath() {
    return path.join(__dirname, '../../database/data.json');
  }

  static async getProducts() {
    try {
      const data = fs.readFileSync(this.getDataFilePath());
      return JSON.parse(data);
    } catch (error) {
      console.error('Erro ao ler os produtos:', error);
      return [];
    }
  }

  static async findAll() {
    return await this.getProducts();
  }

  static async findByCategory(category) {
    const products = await this.getProducts();
    return products.filter(product => product.type.toLowerCase() === category.toLowerCase());
  }

  static async findByName(name) {
    const products = await this.getProducts();
    return products.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
  }

  static async getCategories() {
    const products = await this.getProducts();
    return [...new Set(products.map(product => product.type))]; // Remove duplicados
  }

  static async filterProducts(filters) {
    let products = await this.getProducts();

    if (filters.category) {
      products = products.filter(product => product.type.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.minPrice) {
      products = products.filter(product => product.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      products = products.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    if (filters.size) {
      products = products.filter(product => product.available_sizes.includes(filters.size));
    }

    if (filters.color) {
      products = products.filter(product => product.color && product.color.toLowerCase() === filters.color.toLowerCase());
    }

    return products;
  }

  static async paginateProducts(page = 1, limit = 10) {
    const products = await this.getProducts();
    
    // Calcula o índice inicial e final para a página
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
  
    return {
      currentPage: page,
      perPage: limit,
      total: products.length,
      totalPages: Math.ceil(products.length / limit),
      data: products.slice(startIndex, endIndex) // Retorna apenas os itens da página
    };
  }
  
}

module.exports = ProductService;