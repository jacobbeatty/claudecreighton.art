import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Filters } from '../components'
import { Gallery } from '../components'


const WorksPage = () => {

    const showAll = true;

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
                <Filters></Filters>

                {showAll && <Gallery />}

            </motion.main>
        </Container>
    )
}

export default WorksPage