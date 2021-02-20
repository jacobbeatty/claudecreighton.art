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
        background-color: #ffffffc4;
        font-size: 1.37vw;
        padding: 1vw;
        height: 43vw;
        animation: bioAnimation 2s 1 0s ease-in-out;
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

`