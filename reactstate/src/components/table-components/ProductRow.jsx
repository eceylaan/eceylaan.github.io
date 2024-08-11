function ProductRow({ name, price, stocked, handleStockChange }) {
  const stockStyle = {};
  if (!stocked) {
    stockStyle.color = "red";
    stockStyle.textDecoration = "line-through";
  }

  return (
    <tr style={stockStyle}>
      <td>{name}</td>
      <td>{price}</td>
      <td style={{ textAlign: "center" }}>
        <input onChange={(event) => handleStockChange(event, name)} type="checkbox" checked={stocked} />
      </td>
    </tr>
  );
}
export default ProductRow;
