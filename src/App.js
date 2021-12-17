import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import React, { createContext, useState } from "react";

export const SidebarVisibility = createContext();

function App() {
  const [visible, setVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);

  return (
    <>
      <BrowserRouter>
        <SidebarVisibility.Provider
          value={{
            visible,
            setVisible,
            productVisible,
            setProductVisible,
            companyVisible,
            setCompanyVisible,
          }}
        >
          <div className="sections">
            <Home />
          </div>
        </SidebarVisibility.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
