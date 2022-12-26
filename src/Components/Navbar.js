import React, {useState} from "react";
import styled from "styled-components";
import {RxHamburgerMenu, RxCross2} from "react-icons/rx"

const Navbar = () => {
    const[NavStatus, setNavStatus] = useState(false);

    return(
        <Container>
            <Logo>
                <a href="/">
                    <img src="https://raw.githubusercontent.com/swwayam/tesla/f7826bd2d32c5edf1401db6485a57fc10537e82b/public/images/logo.svg"
                    alt="" />
                </a>
            </Logo>
            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model 3</a>
                <a href="/">Model X</a>
                <a href="/">Model Y</a>
                <a href="/">Solar Roof</a>
                <a href="/">Solar Panel</a> 
            </Menu>
            <Rightmenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <RxHamburgerMenu className="hamburger" onClick={() => setNavStatus(true)}/>
            </Rightmenu>
            <Burgernav showNav={NavStatus}>
                <Closewrapper>
                    <RxCross2 onClick={() => setNavStatus(false)}/>
                </Closewrapper>
                <li><a href="/">Model S</a></li>
                <li><a href="/">Model 3</a></li>
                <li><a href="/">Model X</a></li>
                <li><a href="/">Model Y</a></li>
                <li><a href="/">Solar Roof</a></li>
                <li><a href="/">Solar Panel</a></li>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadaster</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Support</a></li>
            </Burgernav>
        </Container>
    )
}

export default Navbar;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const Logo = styled.div`
    padding-right: 40px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;

    a{
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1020px){
        display: none;
    }
`

const Rightmenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const Burgernav= styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.showNav ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
    }
    a{
        font-size: 12px;
        font-weight: 400;
    }
`

const Closewrapper= styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`