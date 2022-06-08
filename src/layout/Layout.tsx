import React from "react"
import styled from "styled-components"

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <Container>
            <Main>
                {props.children}
            </Main>
            <Footer>
                <a href='https://github.com/pullingoff'>
                2022 @pullingoff
                </a>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-flow: column;
align-items: center;
text-align: center;
`

const Main = styled.main`
margin-top: 20px;
`

const Footer = styled.footer`
display: block;
padding: 1rem;
position: fixed;
bottom: 0;
font-weight: bold;
& a:hover{
    color: salmon;
    font-style: italic;
}
`

export default Layout;