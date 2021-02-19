import styled from "styled-components"

export const BioWrapper = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};

    .bioImg{
        width: 65vw;
        height: 43vw;
    }

    .bioText{
        background-color: #ffffffc4;
        font-size: 1.37vw;
        padding: 1vw;
        height: 43vw;
        animation: bioAnimation 2s 1 0s ease-in-out;
    }


    @keyframes bioAnimation{
    0%{
        background-color: ${props => props.theme.colors.background}
        }
    100%{
        background-color: #ffffffc4
        }
    }

`

