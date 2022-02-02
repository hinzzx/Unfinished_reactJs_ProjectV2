import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./style.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
  <MDBContainer fluid>
    <MDBNavbar fixed="top" expand="lg" light className="mr-auto mb-2 mb-lg-0 my-2 my-lg-0 me-sm-0 my-sm-0">
      
        <MDBNavbarBrand href="#" className="logo">
          <img
            src="https://i.imgur.com/qZoY4ve.png"
            height="30"
            width="30"
            alt=""
            loading="lazy"
            className="no-style-white"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
          className="mr-auto mb-2 mb-lg-0"
        >
          <MDBIcon icon="bars" fas id="navbar-icon" />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="justify-content-center mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="underline-hover-effect text-center">
              <MDBNavbarLink active aria-current="page">
                <Link to="/" className="no-style">
                  Home
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="underline-hover-effect text-center">
              <MDBNavbarLink active aria-current="page">
                <Link to="/products" className="no-style">
                  Products
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="underline-hover-effect text-center">
              <MDBNavbarLink active aria-current="page">
                <Link to="/faq" className="no-style">
                  FAQ
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      
    </MDBNavbar></MDBContainer>
  );
}
