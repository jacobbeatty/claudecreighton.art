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

    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100vh;

    }

`