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
margin: 10px 20px 5vh 10px;
`

const Footer = styled.footer`
display: block;
padding: 1rem;
position: fixed;
bottom: 0;
font-weight: bold;
font-style: italic;
& a:hover{
    color: salmon;
}
`

export default Layout;