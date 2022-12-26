import React from "react";
import styled from "styled-components";


const Section = (props) => {
    return(
        <Wrap image={props.image}>
            <Itemtop>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
            </Itemtop>
            <Buttons>
                <Buttongrp>
                    <Leftbutton>
                        Custom Order
                    </Leftbutton>
                    <Rightbutton>
                        Existing Inventory
                    </Rightbutton>
                </Buttongrp>
                <Icon>
                    <img className="icon" src="https://raw.githubusercontent.com/swwayam/tesla/704ecddf193287cc970050f41ee3d812daddf503/public/images/down-arrow.svg"/>
                </Icon>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('https://raw.githubusercontent.com/swwayam/tesla/main/public/images/${props.image}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Itemtop = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const Buttongrp = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width:760px) {
        display: flex;
        flex-direction: column;
    }
`
const Leftbutton = styled.div`
    background-color: rgb(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const Rightbutton = styled(Leftbutton)`
    background-color: white;
    color: black;
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    height: 40px;
    font-size: 30px;
`
const Buttons = styled.div`
    
`
