import React from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./LOgin.css";

const Signup = () => {
  return (
    <div style={{ width: "390px" }} className=" mx-auto bg-white p-3">
      <Form>
        <h2 className="text-center my-2">Sign Up</h2>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>
            {" "}
            <small className="fw-semibold">Email</small>
          </Form.Label>
          <input
            className="border-bottom pb-2"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>
            <small className="fw-semibold">Password</small>
          </Form.Label>
          <input
            className="border-bottom pb-2"
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          size="sm"
          className="w-100 my-2"
        >
          Sign Up
        </Button>
      </Form>
      <p className="text-center ">
        <small>Already have an account?</small>{" "}
        <Link
          className="text-primary text-decoration-none fw-semibold"
          to="/login"
        >
          <small>Login</small>
        </Link>
      </p>
      <p className="fs-5 text-center fw-semibold">Or</p>
      <div className="d-flex justify-content-center fs-5 mb-3">
        <AiOutlineGoogle></AiOutlineGoogle>
        <BsFacebook className="mx-3"></BsFacebook>
        <AiOutlineInstagram></AiOutlineInstagram>
      </div>
    </div>
  );
};

export default Signup;
