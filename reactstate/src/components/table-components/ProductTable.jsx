function ProductTable({ children }) {
  return (
    <table border={1} style={{ width: 300 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Is Stocked</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
export default ProductTable;
