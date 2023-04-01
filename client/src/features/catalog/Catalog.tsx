import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProducts: () => void;
}

export default function Catalog({products, addProducts}: Props) {
  return (
    <>
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
    </>
  )
}