import styled from "styled-components"

export const GalleryWrapper = styled.div`
    grid-column: 2 / span 1;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};
    height: max-content;




    div{
        display: flex;
    };
    .image{
       width: 100%;
       flex-flow: wrap;
       justify-content: flex-end;
        height: max-content;
        margin-bottom: 2vw;
       div{
           width: 19%;
           margin: .1vw;
           
       }
    }
`