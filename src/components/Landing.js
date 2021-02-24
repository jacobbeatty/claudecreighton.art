import React from 'react'
import { LandingWrapper } from '../elements'
import landingArt from '../images/bg/landing.svg'
import { motion } from 'framer-motion'





export const Landing = () => {

    return (
        <LandingWrapper>
            <div className="centerWork">
                <motion.img src={landingArt} alt="landing page" />
            </div>

        </LandingWrapper>
    )
}
