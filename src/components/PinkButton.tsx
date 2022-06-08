import React from "react";
import styled from "styled-components"

const MyButton = styled.a`
position: relative;
display: inline-block;
cursor:pointer;
outline: none;
vertical-align: middle;
text-decoration: none;
transform-style:preserve-3d;
font-size: inherit;
line-height: 1.6;
font-family: inherit;
font-weight: 600;
color: #382b22;
padding: 1.25em 2em;
background: #fff0f0;
border: 2px solid #b18597;
border-radius: .75em;
user-select: none;
transition: transform 0.15s ease-out, background 0.15s ease-out;

&:hover {
    background:#ffe9e9;
    transform:translateY(0.25em);
}
&::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;left:0;bottom:0;right:0;
    background:#f9c4d2;
    border-radius:inherit;
    box-shadow:0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, .75em, -1em);
    transition:transform .15s ease-out, box-shadow 0.15s ease-out;
}
`;

export function PinkButton({text, clickEvent}: {
    text: string;
    clickEvent: () => void;
}) {
    return <MyButton onClick={clickEvent}>{text}</MyButton>
}