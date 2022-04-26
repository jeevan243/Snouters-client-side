import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { getLogin } from "../loginDetails/action";
import { useNavigate } from "react-router-dom";
import { API } from "./API";

export const LoginPage = () => {
  const navigate = useNavigate();
  //   let dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // console.log(user);
  const [user1, setUser1] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    let { id, value } = e.target;
    setUser({ ...user, [id]: value });
  }

  function handleChange1(e) {
    let { name, value } = e.target;
    setUser1({ ...user1, [name]: value });
  }

  function handleSignUp() {
    axios
      .post(`${API}/register`, user)
      .then((res) => {
        ////dispatch(getLogin(res.data.user._id));
        alert("registered sucessfully");
        setUser({
          name: "",
          email: "",
          password: "",
        });
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("User Alreay Exist Please Login");
        setUser({
          name: "",
          email: "",
          password: "",
        });
      });
  }

  function handleLogin() {
    axios
      .post(`${API}/login`, user1)
      .then((res) => {
        // dispatch(getLogin(res.data.user._id));
        // dispatch(userStatus({ payload: res.data, status: true }));
        localStorage.setItem("userdata", JSON.stringify(res.data));
        alert("LoggedIn sucessfully");
        setUser1({
          name: "",
          email: "",
          password: "",
        });
        navigate("/");
      })

      .catch((err) => {
        alert("Invalid Credentials");
        setUser1({
          name: "",
          email: "",
          password: "",
        });
      });
  }

  return (
    <>
      <div id="userregister">
        <h2>SignUp</h2>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={user.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />

        <Button variant="contained" onClick={handleSignUp} size="small">
          Submit
        </Button>
      </div>

      {/*  */}
      <div id="userlogin">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={user1.email}
          onChange={(e) => {
            handleChange1(e);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user1.password}
          onChange={(e) => {
            handleChange1(e);
          }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleLogin} size="small">
          Submit
        </Button>
      </div>
    </>
  );
};
