import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h3>Home</h3>
        </Link>
        <Link to={"/admin/login"} style={{ textDecoration: "none" }}>
          <h3>Admin</h3>
        </Link>
        <Link to={"user/login"} style={{ textDecoration: "none" }}>
          <h3>User</h3>
        </Link>
      </div>
      <hr />
    </>
  );
};
