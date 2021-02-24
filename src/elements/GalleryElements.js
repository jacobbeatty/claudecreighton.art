import styled from "styled-components"

export const GalleryWrapper = styled.div`
    grid-column: 2 / span 1;
    grid-row: 1 / 1;
    display: flex;
    align-items: right;
    justify-content: end;
    font-size: ${props => props.theme.sizes.header};
    height: max-content;
    width:95%;
    margin-right: 0;
    margin-left: auto;



    .SRLWrapper{
        div{
            width: 100%;
        }
        .css-1yn0gya{
            height: 100%
        }
    }
    div{
        display: flex;
        width: 100%;
    };
    .image{
       width: 100%;
       flex-flow: wrap;
    justify-content: flex-end;
        margin-bottom: 2vw;
       div{
           width: 24%;
           margin: .1vw;
           
       }
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: auto;
        grid-row: auto;
        width: 85vw;
    }

`