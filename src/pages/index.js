import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Landing } from '../components'
import { Helmet } from "react-helmet"


const LandingPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Home | Claude Creighton</title>
        <meta name="description" content="Claude Creighton is a multidisciplinary artist from Adelaide, Australia." />
      </Helmet>
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