import styled from "styled-components";
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri';


export const SidebarBox = styled.div`
    width: 100vw;
    position: absolute;
    top: ${props => props.visible ? '100px' : '-100%'};
    background-color: white;
    left: 0;
    transition: 0.2s;
    padding-bottom: 70px;
`

export const LinkBox = styled.div`
    width: 80%;
    height: 80%;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LinkLabel = styled.div`
    width: 100%;
    height: 15%;
`

export const Link = styled.span`
    font-size: 2em;
    font-weight: 300;
    transition: 0.2s;
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
        color: grey;
    }
`
export const SubLink = styled.span`
    font-size: 1.5em;
    font-weight: 200;
`

export const ProductBox = styled.div`
    width: 80%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 0;
`

export const CompanyBox = styled.div`
    width: 80%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 0;
    margin-top: 30px;
`

export const ArrowDown = styled(RiArrowDropDownLine)`
    color: grey;
`
export const ArrowUp = styled(RiArrowDropUpLine)`
    color: grey;
`
