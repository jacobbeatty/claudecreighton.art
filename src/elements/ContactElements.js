import styled from "styled-components"

export const ContactWrapper = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};

    .contactImg{
        width: 40vw;
        height: 43vw;
    }

    .contactText{
        background-color: #ffffffe8;
        font-size: 1.5vw;
        padding: 1vw;
        height: 43vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        white-space: nowrap;

        span{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 10vw;
            padding: 1vw;
            h1{
                font-size: 2vw;
                color: red;
            }
            p{
                font-size: 1.4vw;
                font-weight: 400;
            }
        }
        
    }


    
    @media ${props => props.theme.breakpoints.mobile}{
        justify-content: normal;
        flex-direction: column;

        .contactImg{
            width: inherit;
            height: 40%;
        }

        .contactText{
            span{
                justify-content: normal;
                height: inherit;
                width: 100%;
                white-space: pre-wrap;
                word-wrap: break-word;
                h1{
                    font-size: 1rem;
                    
                }
                p{
                    padding-bottom: 1vw;
                    padding-top: 1vw;
                    font-size: .8rem;
                }
       
            }

            height: inherit;
        }
    }

`