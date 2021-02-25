import styled from "styled-components"


export const ContainerWrapper = styled.div`

    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 10vh 85vh 5vh;

    main {
    grid-column: 2 / span 1;
    grid-row: 2 / 2;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    font-size: ${props => props.theme.sizes.copy};
    /* overflow-y: scroll; */



    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100vh;

    }
    .bgSvgs{
        opacity: ${props => props.theme.opacity.bg};
        z-index: ${props => props.theme.layers.bg};
        img{
            position: ${props => props.theme.positions.fixed};
        }

    }

    @media ${props => props.theme.breakpoints.mobile}{
        .bgSvgs{
            img{
                width: 15vw;
            }

        }

    }

`

export const bg1Style = {
    width: "10vw",
    top: "64%",
    left: "1%",
}

export const bg1MirrorStyle = {
    width: "10vw",
    top: "64%",
    right: "2%",
    transform: "rotateY(180deg)",
}

export const bg2Style = {
    width: "10vw",
    top: "10%",
    left: "1%",
}
export const bg2MirrorStyle = {
    width: "10vw",
    top: "10%",
    right: "2%",
    transform: "rotateY(180deg)",
}

export const bg3Style = {
    width: "10vw",
    top: "30%",
    left: "9%",
}
export const bg3MirrorStyle = {
    width: "10vw",
    top: "30%",
    right: "10%",
    transform: "rotateY(180deg)",
}

export const bg4Style = {
    width: "15vw",
    top: "8%",
    left: "20%",
    transform: "rotateY(180deg)",
}
export const bg4MirrorStyle = {
    width: "15vw",
    top: "8%",
    right: "20%",
}

export const bg5Style = {
    width: "15vw",
    bottom: "-8%",
    left: "18%",
    transform: "rotateY(180deg)",
}
export const bg5MirrorStyle = {
    width: "15vw",
    bottom: "-8%",
    right: "18%",
}