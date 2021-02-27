import * as React from "react"
import { Container, HorizontalGallery } from "../components"
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


const WorksPage = () => {

    const breakpoints = useBreakpoint();
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
                {breakpoints.sm ? <Gallery /> : <HorizontalGallery />}
            </motion.main>
        </Container>
    )
}

export default WorksPage