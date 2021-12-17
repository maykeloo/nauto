import React, { useContext, useState } from "react";
import {
  ArrowDown,
  CompanyBox,
  Link,
  LinkBox,
  LinkLabel,
  ProductBox,
  SidebarBox,
} from "./sidebarElements";
import { SidebarVisibility } from "../../App";
import Product from "./Sublinks/Product";
import Company from "./Sublinks/Company";

const Sidebar = () => {
  const {
    visible,
    productVisible,
    setProductVisible,
    companyVisible,
    setCompanyVisible,
  } = useContext(SidebarVisibility);

  const productbox = productVisible ? (
    <ProductBox>
      <Product/>
    </ProductBox>
  ) : null;

  const companybox = companyVisible ? (
    <CompanyBox>
      <Company/>
    </CompanyBox>
  ) : null;

  return (
    <>
      <SidebarBox visible={visible}>
        <LinkBox>
          <LinkLabel onClick={() => setProductVisible(!productVisible)}>
            <Link>
              Product <ArrowDown />
            </Link>
          </LinkLabel>
          {productbox}
          <LinkLabel>
            <Link>Partners</Link>
          </LinkLabel>
          <LinkLabel>
            <Link>Recources</Link>
          </LinkLabel>
          <LinkLabel>
            <Link>Careers</Link>
          </LinkLabel>
          <LinkLabel onClick={() => setCompanyVisible(!companyVisible)}>
            <Link>
              Company <ArrowDown />
            </Link>
            {companybox}
          </LinkLabel>
          <LinkLabel>
            <Link>Contact</Link>
          </LinkLabel>
        </LinkBox>
      </SidebarBox>
    </>
  );
};

export default Sidebar;
