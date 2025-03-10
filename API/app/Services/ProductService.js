'use strict'

const fs = require('fs');
const path = require('path');

class ProductService {
  static getDataFilePath() {
    return path.join(__dirname, '../../database/data.json');
  }

  static async getProducts() {
    const data = fs.readFileSync(this.getDataFilePath());
    return JSON.parse(data);
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

  static async getProducts() {
    try {
      const data = fs.readFileSync(this.getDataFilePath());
      return JSON.parse(data);
    } catch (error) {
      console.error('Erro ao ler os produtos:', error);
      return [];
    }
  }  
}

module.exports = ProductService;
