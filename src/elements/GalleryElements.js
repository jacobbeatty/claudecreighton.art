import styled from "styled-components"

export const GalleryWrapper = styled.div`
    grid-column: 2 / span 1;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};

    div{
        display: flex;
    };
    .image{
       width: 100%;
       flex-flow: wrap;

       div{
           width: 33%;
           margin: .1vw;
           
       }
    }
`