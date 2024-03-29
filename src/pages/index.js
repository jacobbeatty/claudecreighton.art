import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Landing } from '../components'


const LandingPage = () => {
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
        <Landing></Landing>
      </motion.main>
    </Container>
  )
}

export default LandingPage