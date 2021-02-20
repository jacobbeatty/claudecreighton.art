import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { Contact } from '../components'


const ContactPage = () => {
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
                <Contact></Contact>
            </motion.main>
        </Container>
    )
}

export default ContactPage

export const query = graphql`
query {
    contactImg: file(relativePath: {eq: "contact.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
