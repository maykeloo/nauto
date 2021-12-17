import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.2s;
    background-color: ${props => props.visible ? 'white': 'transparent'};
`

export const ContentBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;

    @media screen and (max-width: 1000px) {
            justify-content: space-between;
            width: 80%;
    }

    @media screen and (max-width: 600px) {
            width: 90%;
    }
`

export const LogoBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    width: 150px;

    @media screen and (max-width: 600px) {
        width: 130px;
    }
`

export const Navigation = styled.nav`
    height: 100;
    display: flex;
    align-items: center;
    gap: 15px;

    @media screen and (max-width: 1000px){
        display: none;
    }

`

export const Link = styled(LinkR)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s;

    &:hover {
        color: grey;
    }
`

export const LoginBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 200px;
    
    @media screen and (max-width: 1000px) {
        min-width: 170px;
        > #login {
            display: none;
        }
    }
`

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
        width: 20px;
        height: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 999;
    }
`

export const DemoButton = styled(LinkR)`
    background-color: var(--green);
    color: white;
    text-transform: uppercase;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.2s;

    &:hover {
        background-color: #6cc470;
        color: grey
    }

    @media screen and (max-width: 1000px) {
        padding: 5px 10px;
    }
`

export const Line1 = styled.span`
    width: 100%;
    height: 3px;
    background-color: var(--green);
    transform: ${props => props.visible ? 'rotate(45deg) translateY(-5px);' : '0'};
    transform-origin: left;
    transition: 0.2s;
`

export const Line2 = styled.span`
    width: 100%;
    height: 3px;
    background-color: var(--green);
    transform: ${props => props.visible ? 'rotate(-45deg) translateY(5px) ' : '0'};
    transform-origin: left;
    transition: 0.2s;
`

