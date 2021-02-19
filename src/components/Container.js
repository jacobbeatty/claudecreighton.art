import React from 'react'
import { motion } from 'framer-motion'
import { ContainerWrapper } from "../elements"
import { NavBar } from "../components"
import { bg1Style, bg1MirrorStyle, bg2Style, bg2MirrorStyle, bg3Style, bg3MirrorStyle, bg4Style, bg4MirrorStyle, bg5Style, bg5MirrorStyle } from '../elements'
import bg1 from '../images/bg/asset 1.svg'
import bg2 from '../images/bg/asset 2.svg'
import bg3 from '../images/bg/asset 3.svg'
import bg4 from '../images/bg/asset 4.svg'
import bg5 from '../images/bg/asset 5.svg'



export const Container = ({ children }) => {
    return (

        <ContainerWrapper>

            <div className="bgSvgs" >
                <img src={bg1} alt="" style={bg1Style} />
                <img src={bg1} alt="" style={bg1MirrorStyle} />
                <img src={bg2} alt="" style={bg2Style} />
                <img src={bg2} alt="" style={bg2MirrorStyle} />
                <img src={bg3} alt="" style={bg3Style} />
                <img src={bg3} alt="" style={bg3MirrorStyle} />
                <img src={bg4} alt="" style={bg4Style} />
                <img src={bg4} alt="" style={bg4MirrorStyle} />
                <img src={bg5} alt="" style={bg5Style} />
                <img src={bg5} alt="" style={bg5MirrorStyle} />
            </div>
            <NavBar />
            {children}
        </ContainerWrapper>)
}