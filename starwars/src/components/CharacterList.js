import React from "react";
import styled from "styled-components";

const CuteDiv = styled.div`
    background-color: beige;
    width: 40%;
    margin: 0 auto;
    border: 2px solid purple;
    margin-top: 1%;
`;

const CuteH1 = styled.h1`
    color: purple;
    font-family: Impact;
`;

const CuteP = styled.p`
    color: green;
    font-size: 2rem;
`;

export default function CharacterList(props){
    return (
        <CuteDiv>
            <CuteH1>Name: {props.name}</CuteH1>
            <CuteP>Sex: {props.gender}</CuteP>
            <CuteP>Height: {props.height}</CuteP>
            <CuteP>Weight: {props.mass}</CuteP>
        </CuteDiv>
    );
};