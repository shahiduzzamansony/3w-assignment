import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import "./Navbar.css";
import { Form } from "react-bootstrap";
import arbi from "../../assets/Arbitrum Rinkeby.png";
import metamask from "../../assets/rsz_1metamask_foxsvg.png";
import wallet from "../../assets/rsz_wallet.png";
import { ContextApi } from "../ContextAPI/Context";

const NavbarApp = () => {
  const { value, setValue } = useContext(ContextApi);
  // console.log(value);
  const icon = <IoIosContact className="fs-2"></IoIosContact>;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    {
      name: "Arbitrum Rinkeby",
      value: "Arbitrum Rinkeby",
    },
    {
      name: "Avalanche Fuji",
      value: "Avalanche Fuji",
    },
    {
      name: "BNB Chain Testnet",
      value: "BNB Chain Testnet",
    },
    {
      name: "Ethereum Rinkeby",
      value: "Ethereum Rinkeby",
    },
    {
      name: "Fantom Testnet",
      value: "Fantom Testnet",
    },
    {
      name: "Harmony Testnet",
      value: "Harmony Testnet",
    },
    {
      name: "POA Network Sokol",
      value: "POA Network Sokol",
    },
    {
      name: "Polygon Mumbai",
      value: "Polygon Mumbai",
    },
  ];
  const handleChange = (e) => {
    const option = e.target.value;
    // console.log(option);
    setValue(option);
  };

  return (
    <div style={{ height: "79px" }} className="bg-white border-bottom">
      <Navbar collapseOnSelect>
        <Container className="d-flex justify-content-between">
          <Link
            to="/"
            className="text-decoration-none text-primary fw-semibold fs-3"
          >
            Faucets
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="d-flex justify-content-end my-auto"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Form.Select
                size="sm"
                type="select"
                onChange={handleChange}
                style={{ width: "auto" }}
                className="me-2"
                defaultValue={options[3].value}
              >
                {options.map((o) => (
                  <option key={o.value} value={o.value}>
                    <span>
                      <img src={arbi} alt="" />
                      {o.name}
                    </span>
                  </option>
                ))}
              </Form.Select>

              <Button
                className="border border-2 border-primary px-4"
                onClick={handleShow}
                variant="outline-primary"
                size="sm"
              >
                <IoWallet className="fs-6 mb-1"></IoWallet>{" "}
                <span className="d-none d-lg-inline fw-semibold">
                  Connect Wallet
                </span>
              </Button>

              <NavDropdown
                className="rounded-circle ms-2"
                style={{ background: "#eee" }}
                title={icon}
                align="end"
                id="collasible-nav-dropdown"
              >
                <Link
                  to="/login"
                  className="text-decoration-none d-block ms-2"
                  style={{ color: "#6d7380" }}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="text-decoration-none d-block ms-2"
                  style={{ color: "#6d7380" }}
                >
                  Sign Up
                </Link>
                <Link
                  to="/faq"
                  className="text-decoration-none d-block ms-2"
                  style={{ color: "#6d7380" }}
                >
                  FAQ
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Your Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 my-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-accent px-5 py-3 cursor">
            <img src={metamask} alt="" />
            <p className="text-primary fw-bold">MetaMask</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center bg-accent px-5 py-3 cursor">
            <img src={wallet} alt="" />
            <p className="text-primary fw-bold">WalletConnect</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarApp;
