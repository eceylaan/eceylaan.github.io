import { useState } from "react";
import ProductTable from "./components/table-components/ProductTable";
import ProductRow from "./components/table-components/ProductRow";
import SearchBox from "./components/base/SearchBox";

const productList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Products() {
  const [searched, setSearched] = useState("");
  const [showOnlyInStock, setOnlyInStock] = useState(false);

  function handleChange(e) {
    setSearched(e.target.value);
  }

  function handleStockClick() {
    setOnlyInStock(!showOnlyInStock);
  }
  function handleStockChange(e, name) {
    console.log(e);
    const index = products.findIndex((product) => product.name === name);
    products[index].stocked = e.target.checked;
  }

  let products = productList.filter((x) => x.name.toLowerCase().includes(searched.trim().toLowerCase()));

  if (showOnlyInStock) {
    products = products.filter((x) => x.stocked);
  }

  const Products = () => {
    return products.map((x) => (
      <ProductRow key={x.name} stocked={x.stocked} name={x.name} price={x.price} handleStockChange={handleStockChange} />
    ));
  };

  return (
    <div className="products">
      <input type="button" value="" />
      <SearchBox handleStockClick={handleStockClick} handleChange={handleChange} />
      <ProductTable>
        <Products />
      </ProductTable>
    </div>
  );
}
