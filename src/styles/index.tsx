import styled from "styled-components"

export const Header = styled.h1`
font-size: 3rem;
`
interface IBtnStyle {
  background?: string;
}

export const ResetBtn = styled.button<IBtnStyle>`
margin: auto;
border: none;
font-size: 1.3rem;
background: ${props => props.background};
font-weight: bold;
cursor: pointer;
&:hover {
  background: lightgrey;
}
`