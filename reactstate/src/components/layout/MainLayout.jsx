import React, { useContext } from "react";

export const MainLayout = ({ children }) => {
  // const context = useContext()
  return (
    <div style={{ display: "grid", gridTemplateColumns: "10% 1fr 10%" }}>
      <div style={{ background: "red" }}></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</div>

      <div style={{ background: "yellow" }}></div>
    </div>
  );
};
