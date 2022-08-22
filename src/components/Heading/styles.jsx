import styled, { css } from "styled-components";

export const Styles = styled.h1`
    font-size: 2rem;
    line-height: 1.3;

    ${(props) =>
        props.center &&
        css`
            text-align: center;
        `}

    ${(props) =>
        props.spacing &&
        css`
            padding-block: 3rem;
        `}


    ${(props) =>
        props.size === "sm" &&
        css`
            font-size: clamp(1.25rem, 3.5vw, 1.5rem);
        `}

    ${(props) =>
        props.size === "md" &&
        css`
            font-size: clamp(2rem, 3.5vw, 2.25rem);
        `}

    ${(props) =>
        props.size === "lg" &&
        css`
            font-size: clamp(2.5rem, 3.5vw, 2.75rem);
        `}
`;
