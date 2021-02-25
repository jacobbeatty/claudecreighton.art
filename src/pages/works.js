import * as React from "react"
import { Container, HorizontalGallery } from "../components"
import { motion } from 'framer-motion'
import { Filters } from '../components'
import { Gallery } from '../components'

import { useBreakpoint, withBreakpoints } from 'gatsby-plugin-breakpoints';



// const WorksPage = () => {

//     const breakpoints = useBreakpoint();
//     return (
//         <Container>
//             <motion.main
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{
//                     duration: 1
//                 }}
//             >
//                 {breakpoints.md ? null : <Filters />}

//                 <Gallery />

//             </motion.main>
//         </Container>
//     )
// }


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

                {/* {breakpoints.md ? null : <HorizontalGallery />} */}
                {breakpoints.l ? <Gallery /> : <HorizontalGallery />}


            </motion.main>
        </Container>
    )
}

export default WorksPage