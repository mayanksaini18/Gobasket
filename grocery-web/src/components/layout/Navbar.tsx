import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <Link to="/home">Home</Link>{" "}
      <Link to="/cart">Cart</Link>{" "}
      <Link to="/orders">Orders</Link>
    </nav>
  );
};

export default Navbar;
