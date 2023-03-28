import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  function addProducts() {
    setProducts(prevState => [...products, { 
      id: prevState.length + 101,
      name: "Product 3", 
      price: 200.0, 
      brand: "some brand", 
      description: "some description", 
      pictureUrl: "http://picsum.photos/200",
    }]);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold pb-6">My Store</h1>
      <ul className="pb-2">
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <button
        className="p-4 border rounded border-black text-black"
        onClick={addProducts}
      >
        Add Product
      </button>
    </div>
  );
}

export default App;
