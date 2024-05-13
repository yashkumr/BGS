import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../assets/customCss/Header.css";
import { NavLink } from "react-router-dom";
import mainLogo from "../../assets/images/Icons/logo1.png";
import contactLogo from "../../assets/images/Icons/login.webp";
import message from "../../assets/images/Icons/message.webp";
import chat from "../../assets/images/Icons/chat.webp";
const Header = () => {
  return (
    <>
      <Navbar expand="lg " className="header--site">
        <Container>
          <Navbar.Brand href="#">
            <NavLink to="/" className="main-logo">
              {" "}
              <img src={mainLogo} />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto  main-content" navbarScroll>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="nav-drop rounded-0 border-none "
              >
                <NavDropdown.Item href="/business-electricity">
                  Business Electricity
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/domestic-energy">
                  Domestic Energy
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/business-telicom">
                  Business Telecoms
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/corporate-energy" className="">
                  Corporate Energy
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/business-water" className="">
                  Business Water
                </NavDropdown.Item>
                {/* <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="" className="">
                  Corporate Suppliers
                </NavDropdown.Item> */}
              </NavDropdown>

              <NavDropdown
                title="Sectors"
                id="basic-nav-dropdown"
                className="nav-drop rounded-0 border-none "
              >
                <NavDropdown.Item href="/all-sector" className="">
                  All Sectors
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/gas-electric">SME</NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/lbu">
                  Large Business Utilities
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/guides">Guids</Nav.Link>
              <NavDropdown
                title="About"
                id="basic-nav-dropdown"
                className="nav-drop rounded-0 border-none "
              >
                <NavDropdown.Item href="/about-us" className="">
                  About us
                </NavDropdown.Item>

                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/supplier">
                  Our Suppliers
                </NavDropdown.Item>
                <NavDropdown.Divider className="text-light" />
                <NavDropdown.Item href="/our-sector">
                  Our Sectors
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="#action2">01444390139</Nav.Link>
              <Nav.Link href="/contact-us">Get Code</Nav.Link>
            </Nav>

            <div className="main-contact-sectoin">
              <div>
                <NavLink to="/contact-us" className="circle--contact">
                  <img src={contactLogo} />
                </NavLink>
                <NavLink className="circle--mail">
                  <img src={message} />
                </NavLink>
                <NavLink className="circle--livechat">
                  <img src={chat} />
                </NavLink>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
