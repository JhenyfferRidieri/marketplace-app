const Filters = () => {
  return (
    <div className="p-3 bg-white shadow-md rounded-lg w-56">
      <h2 className="text-md font-semibold mb-2 text-gray-800">Filtros</h2>

      {/* Categoria */}
      <div className="mb-3">
        <label className="block text-gray-600 text-sm font-medium">Categoria:</label>
        <select className="w-full border rounded-md px-2 py-1 bg-gray-100 text-sm">
          <option value="">Todas</option>
          <option value="Camiseta">Camiseta</option>
          <option value="Regata">Regata</option>
          <option value="Calção">Calção</option>
        </select>
      </div>

      {/* Tamanho */}
      <div>
        <label className="block text-gray-600 text-sm font-medium">Tamanho:</label>
        <div className="grid grid-cols-4 gap-1 mt-2">
          {["P", "M", "G", "GG", "42", "44", "46"].map((size) => (
            <button
              key={size}
              className="border rounded-md px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 transition-all"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;