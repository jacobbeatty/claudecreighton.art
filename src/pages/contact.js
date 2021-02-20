import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { ContactWrapper } from "../elements"

const ContactPage = ({ data }) =>
(
    <Container>

        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 1
            }}
        >
            <ContactWrapper>
                <Img alt="Exhibition work" className="contactImg" fluid={data.contactImg.childImageSharp.fluid} />
                <motion.div className="contactText" whileHover={{ scale: 1.01, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                    <span className="enquires">
                        <h1>ENQUIRES</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ex!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ratione!</p>
                    </span>
                    <span className="links">
                        <h1>LINKS</h1>
                        <p>Instagram: <a href="/" target="_blank">@claudecreighton</a></p>
                        <p>Email: <a href="/" target="_blank">claude@claudecreighton.art</a></p>
                        <p>Facebook? <a href="/" target="_blank">Facebook?</a></p>
                    </span>
                    <span className="exhibitions">
                        <h1>EXHIBITIONS</h1>
                        <p>(UPCOMING) MAGIC METAMORPHOUS, SEPTEMBER, URBAN COW</p>
                        <p>(UPCOMING) RED ROOM, SEPTEMBER, BRUNSWICK GALLERY</p>
                    </span>
                </motion.div>
            </ContactWrapper>
        </motion.main>
    </Container>
)


export default ContactPage

export const query = graphql`
query {
    contactImg: file(relativePath: {eq: "contact.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
