import styled from "styled-components";
import css from "styled-jsx/css";

export const Wrapper = styled.header`
    border-bottom: 1px solid #333;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1rem;
    color: #888;

    nav {
        display: flex;
        gap: 1.5rem;
    }
`;

export const LinkWrapper = styled.div`
    ${(props) =>
        props.active &&
        css`
            color: #fdfdfd;
        `}
`;
