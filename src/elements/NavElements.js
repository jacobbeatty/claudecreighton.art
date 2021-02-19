import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 1;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};
    font-weight: 600;




    a{
        text-decoration: none;
        color: black;
        font-size: 1.3em;
        z-index: ${props => props.theme.layers.nav};

    }
    div{
        display: flex;
        justify-content: space-between;
        width: 400px;
        z-index: ${props => props.theme.layers.nav};
        a:hover{
            color: white;
            transition: .5s;
        }
    }

    


    @media ${props => props.theme.breakpoints.mobile}{
        div{
            visibility: hidden;
        }
    }

`