const Filters = () => {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Filtros</h2>
  
        {/* Categoria */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Categoria:</label>
          <select className="w-full border rounded-md px-3 py-2 bg-gray-100">
            <option value="">Todas</option>
            <option value="Camiseta">Camiseta</option>
            <option value="Regata">Regata</option>
            <option value="Calção">Calção</option>
          </select>
        </div>
  
        {/* Cor */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Cor:</label>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#000000"].map(
              (color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              )
            )}
          </div>
        </div>
  
        {/* Tamanho */}
        <div>
          <label className="block text-gray-600 font-medium">Tamanho:</label>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {["P", "M", "G", "GG", "42", "44", "46"].map((size) => (
              <button
                key={size}
                className="border rounded-lg px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 transition-all"
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