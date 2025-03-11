'use strict'

const Route = use('Route');

Route.get('/products/paginate', 'ProductController.paginatedProducts');
Route.get('/products', 'ProductController.index'); // Listar todos os produtos
Route.get('/products/category/:category', 'ProductController.filterByCategory'); // Filtrar por categoria
Route.get('/products/:name', 'ProductController.findByName'); // Buscar produto pelo nome
Route.get('/products/details/:name', 'ProductController.getProductDetails'); // Buscar detalhes do produto
Route.get('/categories', 'ProductController.getCategories'); // Listar todas as categorias
Route.get('/products/filter', 'ProductController.filterProducts'); // Filtro avançado de produtos

Route.get('/', () => {
  return { greeting: 'API E-commerce - JSON' }
});