import styled from "styled-components"

export const LandingWrapper = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    display: flex;
    align-items: left;
    justify-content: space-between;
    font-size: ${props => props.theme.sizes.header};
    height: fit-content;



@keyframes yourAnimation{
    0%{
        }
    50%{
        transform: translateY(-1%);
        }
    100%{
        transform: rotate(xx) translateY(0);
        }
    }

    .centerWork{

        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: -5vw;
        overflow: hidden;
        height: fit-content;

        img{
            width: 65%;
            animation: yourAnimation 4s infinite 0s ease-in-out;
            z-index: 2;
            
        }
    }

    
    @media ${props => props.theme.breakpoints.mobile}{
        .centerWork{
            justify-content: start;
            img{
                width: 100%;
                align-self: self-start;
                padding-top: 22vw;
            }
        }
    }

    @media only screen and (min-width: 1023px) and (max-height: 1367px) and (orientation: portrait) {
        .centerWork{
            justify-content: center;
            img{
                width: 100%;
                align-self: self-start;
                padding-top: 22vw;
            }
        }
    }


`

