import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h3>Home</h3>
        <hr />
      </Link>
    </>
  );
};
