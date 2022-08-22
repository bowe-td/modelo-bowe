import React from "react";
import { Wrapper } from "./styles";
import Container from "../../Container";

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <p>
                    &copy; Copyright {new Date().getFullYear()} -{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https:bowe.com.br/"
                    >
                        Bowe
                    </a>
                </p>
            </Container>
        </Wrapper>
    );
};

export default Footer;
