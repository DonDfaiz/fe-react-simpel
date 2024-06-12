import React, { useState } from "react";
import Particle from "../components/Particle";
import Typing from "../components/TypingText";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "../assets/style.css";
import { Link, useNavigate } from "react-router-dom";

async function hitApi(state) {
  const body = new URLSearchParams();
  body.append("username", state.username);
  body.append("password", state.password);

  const response = await fetch("http://localhost:4646/login", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body,
  });
  return response;
}

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
    isValidate: false,
    alertText: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <Particle />
      <Typing />
      <br />
      <h1 className="display-1 text-center">Login</h1>
      <br />
      <div className="container">
        <Form
          className="col-md-6 mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            if (state.username === "" || state.password === "") {
              setState({ ...state, isValidate: true });
            } else {
              setState({ ...state });
              hitApi(state).then(async (response) => {
                console.log("status :", response.status);
                const data = await response.json();
                console.log("🚀 ~ hitApi ~ data:", data);
                if (response.status === 400) {
                  setState({ ...state, alertText: data.message });
                }
                if (response.status === 200) {
                  navigate("/beranda");
                }
              });
            }
          }}
        >
          <FormGroup>
            <Label for="username" className="fs-5">
              Username
            </Label>
            <Input
              invalid={state.isValidate && state.username === ""}
              id="username"
              placeholder="izy"
              type="text"
              value={state.username}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="Password" className="fs-5">
              Password
            </Label>
            <Input
              invalid={state.isValidate && state.password === ""}
              id="password"
              placeholder="password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="d-flex justify-content-evenly align-items-center m-5">
            <button type="submit" className="btn btn-dark btn-lg">
              Masuk
            </button>
            <Link to={"#"} className="text-decoration-none">
              Lupa Password
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items">
            <p>Belum Punya Akun?</p>
            <Link to={"/Register"} className="text-decoration-none">
              {" "}
              Registrasi Akun
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
