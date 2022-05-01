import { Link } from "react-router-dom";

export const Navbar = () => {
  var data = JSON.parse(localStorage.getItem("userdata")) || null;
  if (data !== null) {
    var { name } = data.user;
  }
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
          <h3>{data !== null ? `User - ${name}` : "User"}</h3>
        </Link>
      </div>
      <hr />
    </>
  );
};
