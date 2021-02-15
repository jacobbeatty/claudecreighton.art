import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'


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
                <h1>fuck</h1>
            </motion.main>
        </Container>
    )
}

export default BioPage
