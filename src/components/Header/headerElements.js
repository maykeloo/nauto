import styled from "styled-components";

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    @media screen and (max-width: 1000px)
    {
        height: 70vh;
    }
`

export const BGVideo = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    object-fit: cover;
`