import React from 'react'
import { NavWrapper } from '../elements'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export const NavBar = () => {

    return (

        <NavWrapper>
            <motion.div whileHover={{ letterSpacing: "1vw", transition: { duration: .2 } }} >
                <Link to="/">CLAUDE CREIGHTON</Link>
            </motion.div>

            <motion.div>
                <Link to="/bio" activeStyle={{ color: "red" }}>BIO</Link>
                <Link to="/works" activeStyle={{ color: "red" }}>WORKS</Link>
                <Link to="/contact" activeStyle={{ color: "red" }}>CONTACT</Link>
            </motion.div>

        </NavWrapper>
    )
}