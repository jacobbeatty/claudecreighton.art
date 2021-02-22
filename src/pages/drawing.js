import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Filters } from '../components'
import { DrawingGallery } from '../components'


const DrawingWorksPage = () => {
    return (
        <Container>
            <main>
                <Filters></Filters>
                <DrawingGallery></DrawingGallery>
            </main>
        </Container>
    )
}

export default DrawingWorksPage