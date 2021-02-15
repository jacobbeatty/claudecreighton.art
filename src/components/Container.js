import React from 'react'
import { ContainerWrapper } from "../elements"
import { NavBar } from "../components"

export const Container = ({ children }) => {
    return (
        <ContainerWrapper><NavBar /> {children} </ContainerWrapper>)
}