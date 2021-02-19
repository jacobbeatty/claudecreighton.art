import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Bio } from '../components'


const BioPage = () => {
    return (
        <Container>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1
                }}
            >
                <Bio></Bio>
            </motion.main>
        </Container>
    )
}

export default BioPage
