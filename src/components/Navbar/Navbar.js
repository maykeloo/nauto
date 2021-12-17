import React, { useContext } from "react";

import {
  ContentBox,
  DemoButton,
  Line1,
  Line2,
  Link,
  LoginBox,
  Logo,
  LogoBox,
  MobileMenu,
  Nav,
  Navigation,
} from "./navbarElements";
import logo from "../../images/nauto.svg";
import { SidebarVisibility } from "../../App";

const Navbar = () => {
  const navElements = [
    "product",
    "partners",
    "resources",
    "careers",
    "company",
    "contact",
  ];
  const navElement = navElements.map((element) => <Link to="">{element}</Link>);

  const { visible, setVisible, setProductVisible, setCompanyVisible } =
    useContext(SidebarVisibility);

  return (
    <>
      <Nav visible={visible}>
        <ContentBox>
          <LogoBox>
            <Logo src={logo} />
          </LogoBox>
          <Navigation>{navElement}</Navigation>
          <LoginBox>
            <Link to="" id="login">
              login
            </Link>
            <DemoButton to="">Request demo</DemoButton>
            <MobileMenu
              onClick={() => {
                setVisible(!visible);
                setProductVisible(false);
                setCompanyVisible(false);
              }}
            >
              <Line1 visible={visible} />
              <Line2 visible={visible} />
            </MobileMenu>
          </LoginBox>
        </ContentBox>
      </Nav>
    </>
  );
};

export default Navbar;
