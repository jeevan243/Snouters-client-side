import axios from "axios";
import { useState } from "react";

export const AdminLogin = () => {
  const [userdata, setUserdata] = useState([]);

  //   const getData = () => {
  //     axios
  //       .post("http://localhost:5000/login", userdata)
  //       .then((res) => {
  //         alert("Admin Logged in Succesfully");
  //       })
  //       .catch((er) => {
  //         alert("Email or Password went wrong ");
  //       });
  //   };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserdata({ ...userdata, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userdata);
  };
  return (
    <>
      <h2>Admin Login</h2>
      <div id="adminlogin">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
};
