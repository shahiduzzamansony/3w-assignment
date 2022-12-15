import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AiFillWarning } from "react-icons/ai";
import { ContextApi } from "../ContextAPI/Context";
import Request from "../Request/Request";
import ReCAPTCHA from "react-google-recaptcha";
const Home = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const { value } = useContext(ContextApi);
  console.log(value);
  return (
    <div className="bg-accent">
      <div className="bg-primary text-center py-3 text-white">
        <p className="mb-0">Notice here</p>
      </div>
      <Container className="py-5">
        <h1 className="text-primary fs-1">Request testnet LINK</h1>
        <p className="text-fonm ">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can <br></br> create and test your own oracle and
          Chainlinked smart contract
        </p>
      </Container>
      <Container className="bg-white py-3">
        <p className="bg-accent py-1">
          <AiFillWarning className="fs-5 mx-2 mb-1 text-primary"></AiFillWarning>
          Your wallet is connected to <span className="fw-bold">{value}</span>,
          so you are requesting <span className="fw-bold">{value}</span>{" "}
          Link/ETH.
        </p>
        <Form>
          <Form.Group
            className="mb-3 w-50"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="fw-semibold text-primary">
              Wallet Address
            </Form.Label>
            <Form.Control type="text" placeholder="Wallet Address..." />
          </Form.Group>
          <Form.Group
            className="mb-3 w-50"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="fw-semibold text-primary">
              Request Type
            </Form.Label>
            <div className="d-flex gap-3">
              <Form.Control type="text" placeholder="20 Test Link" />
              <Form.Control type="text" placeholder="0.5 ETH" />
            </div>
          </Form.Group>
        </Form>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
          className="mb-3"
        />
        <Button variant="primary">Send Request</Button>
        <div className="bg-white mt-3">
          <p className="fw-semibold">Request History</p>
          <Request></Request>
        </div>
      </Container>
    </div>
  );
};

export default Home;
