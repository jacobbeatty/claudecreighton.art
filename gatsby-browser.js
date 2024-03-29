import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import './src/styles/animations.css'
import { AnimatePresence } from 'framer-motion'
import bgFull from './src/images/bg/bg2.svg'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    body, html {
        font-family: 'Newsreader', serif;
        font-weight: ${props => props.theme.weights.else};

        background-color: ${props => [props.theme.colors.background]};
        height: 100%;
        width: 100%;
        /* background-image: url(${bgFull});
        background-repeat: no-repeat;
  background-size: 100% 100%; */
    }

    ::-webkit-scrollbar {
    height: 10px;
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #E91E63;
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