import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import './src/styles/animations.css'
import { AnimatePresence } from 'framer-motion'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        background-color: ${props => [props.theme.colors.background]};
        height: 100%;
        width: 100%;
    }

`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)
export const wrapPageElement = ({ element }) => (
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);