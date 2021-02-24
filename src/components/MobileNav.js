import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const MenuIcon = styled.button`
    /* position: fixed;
    top: 1rem;
    right: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 11;
    div{
        width: 1.5rem;
        height: .33rem;
        background-color: black;
        transform-origin: 1px;
        position: relative;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({ nav }) => nav ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-child(2){
            opacity: ${({ nav }) => nav ? "0" : "1"} 
        }
        :nth-child(3) {
            transform: ${({ nav }) => nav ? 'rotate(-45deg)' : 'rotate(0)'};

        }
    }


`

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background-color: #fffffff0;
    position: absolute;
    z-index: 10;
    padding-top: 10vw;
    top: 0;
    right: 0;
    transition: transform 200ms;
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
    text-decoration: none;
    a{
        text-decoration: none;
        color: black;
        font-size: 3rem;
        padding: 1rem;
    }
`

const MobileName = styled(props => <Link {...props} />)`

    /* position: fixed;
    top: 1rem;
    left: 1rem; */
    font-size: 1.25rem;
    z-index: 10;
    text-decoration: none;
    color: black;


`

const MobileNavMenu = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding-left: 5%;
    padding-top: 2%;
    padding-right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`


export const MobileNav = ({ children }) => {

    const [nav, showNav] = useState(false)
    return (

        <MobileNavMenu>
            <MobileName to="/">
                CLAUDE <br /> CREIGHTON
            </MobileName>

            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                <div />
                <div />
                <div />
            </MenuIcon>
            <MenuLinks nav={nav}>
                <Link to="/bio" activeStyle={{ color: "red" }}>BIO</Link>
                <Link to="/works" activeStyle={{ color: "red" }}>WORKS</Link>
                <Link to="/contact" activeStyle={{ color: "red" }}>CONTACT</Link>
            </MenuLinks>



        </MobileNavMenu>


    )
}