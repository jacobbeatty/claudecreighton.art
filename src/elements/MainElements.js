import styled from "styled-components"

export const MainWrapper = styled.main`
    grid-column: 2 / span 1;
    grid-row: 2 / 2;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    font-size: ${props => props.theme.sizes.copy};

    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100vh;

    color: red;
`