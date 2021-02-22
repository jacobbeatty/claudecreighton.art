import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Filters } from '../components'
import { BVAGallery } from '../components'


const BVAWorksPage = () => {
    return (
        <Container>
            <main>
                <Filters></Filters>
                <BVAGallery></BVAGallery>
            </main>
        </Container>
    )
}

export default BVAWorksPage