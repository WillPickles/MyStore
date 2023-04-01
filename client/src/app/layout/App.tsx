import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  function addProducts() {
    setProducts(prevState => [...prevState, { 
      id: prevState.length + 101,
      name: 'Product' + (prevState.length + 1), 
      price: (prevState.length * 100) + 100, 
      brand: "some brand", 
      description: "some description", 
      pictureUrl: "http://picsum.photos/200",
    }]);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold pb-6">My Store</h1>
      <Catalog products={products} addProducts={addProducts}/>
      
    </div>
  );
}

export default App;
