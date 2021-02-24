import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ContainerWrapper } from "../elements"
import { NavBar } from "../components"
import { bg1Style, bg1MirrorStyle, bg2Style, bg2MirrorStyle, bg3Style, bg3MirrorStyle, bg4Style, bg4MirrorStyle, bg5Style, bg5MirrorStyle } from '../elements'
import bg1 from '../images/bg/Asset 1.svg'
import bg2 from '../images/bg/Asset 2.svg'
import bg3 from '../images/bg/Asset 3.svg'
import bg4 from '../images/bg/Asset 4.svg'
import bg5 from '../images/bg/Asset 5.svg'

import SimpleReactLightbox from 'simple-react-lightbox'
import { useBreakpoint, withBreakpoints } from 'gatsby-plugin-breakpoints';
import { MobileNav } from './MobileNav'

export const Container = ({ children }) => {


    const breakpoints = useBreakpoint();
    return (

        <ContainerWrapper>
            <SimpleReactLightbox>

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
                {breakpoints.md ? null : <NavBar />}
                {breakpoints.md ? <MobileNav /> : null}

                {children}
            </SimpleReactLightbox>
        </ContainerWrapper>)

}