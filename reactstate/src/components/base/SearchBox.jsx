import React from "react";

function SearchBox({ handleStockClick, handleChange }) {
  return (
    <div className="searchBox">
      <p>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <br />
        <label>
          <input type="checkbox" onClick={handleStockClick} /> Only show products in stock
        </label>
      </p>
    </div>
  );
}
export default SearchBox;
