import styled from "styled-components"

export const BioWrapper = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};

    .bioImg{
        width: 1000%;
        height: 43vw;
    }

    .bioText{
        background-color: #ffffffe8;
        font-size: 1.5vw;
        padding: 1vw;
        height: 43vw;
        /* animation: bioAnimation 2s 1 0s ease-in-out; */
        text-align: center;
        font-weight: 500;

    }


    @keyframes bioAnimation{
    0%{
        background-color: ${props => props.theme.colors.background}
        }
    100%{
        background-color: #ffffffc4
        }
    }


    .bioSVG{
        display: block;
        margin: -1% auto auto auto;
        font-family: 'Newsreader';
        align-self: center;
        width: 51vw;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        flex-direction: column;
        justify-content: normal;
        .bioImg {
            width: inherit;
            height: inherit;
        }
        .bioText{
            font-size: 1rem;
            height: inherit;
            padding: 3vw;
        }
    }


`

