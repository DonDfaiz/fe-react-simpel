import React from "react";
import Typing from "../components/TypingText";
import Particle from "../components/Particle";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Typing />
      <Particle />
      <br />
      <h1 className="display-1 text-center">Register</h1>
      <br />
      <div className="container">
        <Form className="col-md-6 mx-auto">
          {/* <Form className="col-md-6 mx-auto">
          <FormGroup>
            <Label for="nidn" className="fs-5">
              NIDN
            </Label>
            <Input
              id="nidn"
              name="nidn"
              placeholder="01000450235"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="nama" className="fs-5">
              Nama Lengkap
            </Label>
            <Input
              id="nama"
              name="nama"
              placeholder="Budi Setiawan"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="fakultas" className="fs-5">
              Fakultas
            </Label>
            <Input
              id="fakultas"
              name="fakultas"
              placeholder="Ilmu Komputer"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="prodi" className="fs-5">
              Program Studi
            </Label>
            <Input
              id="prodi"
              name="prodi"
              placeholder="Teknik Informatika"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="alamat" className="fs-5">
              Alamat
            </Label>
            <Input
              id="alamat"
              name="alamat"
              placeholder="Jl. Dliko Indah Gang IX No.82 A-B, Blotongan, Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50715"
              type="text"
            />
          </FormGroup>*/}
          <FormGroup>
            <Label for="username" className="fs-5">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="izy"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Email" className="fs-5">
              Email
            </Label>
            <Input
              id="Email"
              name="email"
              placeholder="Example@email.com"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password" className="fs-5">
              Password
            </Label>
            <Input
              id="Password"
              name="password"
              placeholder="password"
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="ConfirmPassword" className="fs-5">
              Confirm Password
            </Label>
            <Input
              id="ConfirmPassword"
              name="ConfirmPassword"
              placeholder="ConfirmPassword"
              type="password"
            />
          </FormGroup>
        </Form>
        <div className="d-flex justify-content-lg-evenly align-items-center m-5">
          <button type="submit" className="btn btn-dark btn-lg">
            Daftar
          </button>
          <Link to={"/"}>
            <Button type="submit" className="btn btn-dark btn-lg">
              Kembali
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
