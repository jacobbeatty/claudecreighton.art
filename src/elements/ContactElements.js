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
        font-size: 1.37vw;
        padding: 1vw;
        height: 43vw;
        /* animation: bioAnimation 2s 1 0s ease-in-out; */
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
            }
            p{
                font-size: 1.4vw;
            }
        }
        
    }


    @keyframes bioAnimation{
    0%{
        background-color: ${props => props.theme.colors.background}
        }
    100%{
        background-color: #ffffffc4
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
                    color: red;
                }
       
            }

            height: inherit;
        }
    }

`