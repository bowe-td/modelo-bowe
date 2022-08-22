import React from "react";
import { Styles } from "./styles";

const Container = ({ children, ...props }) => {
    return <Styles {...props}>{children}</Styles>;
};

export default Container;
