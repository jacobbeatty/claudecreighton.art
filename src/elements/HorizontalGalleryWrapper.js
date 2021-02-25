import styled from "styled-components"

export const HorizontalGalleryWrapper = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    display: flex;
    font-size: ${props => props.theme.sizes.header};
    height: max-content;
    flex-direction: row;
    /* height: 100%; */
    /* .image{
        width: fit-content;
    } */
    overflow: scroll;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);


   
    .image{
       width: 775vw;
       height: 85vh;
       display: flex;
       flex-direction: row;
       /* flex-flow: wrap; */
       cursor: pointer;
       div{
           width: 100%;
           margin: .1vw;
           
       }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: auto;
        grid-row: auto;
        width: 85vw;
    }

`