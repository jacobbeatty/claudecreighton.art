import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Filters } from '../components'
import { HonoursGallery } from '../components'


const HonoursWorksPage = () => {
    return (
        <Container>
            <main>
                <Filters></Filters>
                <HonoursGallery></HonoursGallery>
            </main>
        </Container>
    )
}

export default HonoursWorksPage