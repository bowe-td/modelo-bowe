import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Styles } from "./styles";

const Layout = ({ children }) => {
    return (
        <Styles>
            <Header />
            <main>{children}</main>
            <Footer />
        </Styles>
    );
};

export default Layout;
