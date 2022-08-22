import Link from "next/link";
import React from "react";
import Container from "../../Container";
import { Content, LinkWrapper, Wrapper } from "./styles";
import { headerLinks } from "../../../common/headerLinks";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="logo">logo</div>
                    <nav>
                        {headerLinks.map((link) => (
                            <LinkWrapper
                                key={link.path}
                                active={
                                    router.pathname === link.path ? true : false
                                }
                            >
                                <Link href={link.path}>{link.label}</Link>
                            </LinkWrapper>
                        ))}
                    </nav>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Header;
