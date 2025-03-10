'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/products', 'ProductController.index'); // Listar todos os produtos
Route.get('/products/category/:category', 'ProductController.filterByCategory'); // Filtrar por categoria
Route.get('/products/:name', 'ProductController.findByName'); // Buscar produto pelo nome


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
