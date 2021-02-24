import styled from "styled-components"

export const FilterWrapper = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: ${props => props.theme.sizes.header};
    position: ${props => props.theme.positions.absolute};
    ul{
        list-style-type: none;
        font-size: 1.5em;
        font-style: italic;
        font-size: ${props => props.theme.sizes.header};
        position: ${props => props.theme.positions.fixed};
        background-color: #fcdadaad;
        display: flex;
        flex-direction: column;

        text-align: -webkit-match-parent;
        span{
            display: flex;
            align-items: center;
            padding:  .5vw 0  .5vw 0; 
            a{
                text-decoration: none;
                color: black;
                font-size: 1.3em;
                background-color: white;
            }
            input{
                margin-left:.5vw;
            }
        }
    }

    /* @media ${props => props.theme.breakpoints.mobile}{
        grid-column: auto;
        grid-row: auto;
        width: 85vw;
    } */
`