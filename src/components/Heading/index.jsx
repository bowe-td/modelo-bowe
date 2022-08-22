import React from "react";
import { Styles } from "./styles";

const Heading = ({ children, as, ...props }) => {
    return (
        <Styles as={as} {...props}>
            {children}
        </Styles>
    );
};

export default Heading;
