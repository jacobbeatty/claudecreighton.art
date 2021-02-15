import styled from "styled-components"

export const FilterWrapper = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: ${props => props.theme.sizes.header};
    ul{
        list-style-type: none;
        font-size: 1.3em;
    }
`