import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { ContactWrapper } from "../elements"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"


const ContactPage = ({ data }) =>
(
    <Container>
        <Helmet>
            <title>Contact | Claude Creighton</title>
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
            <ContactWrapper>
                <Img alt="Exhibition work" className="contactImg" fluid={data.contactImg.childImageSharp.fluid} />
                <motion.div className="contactText" whileHover={{ scale: 1.01, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                    <span className="enquires">
                        <br />
                        <h1>ENQUIRIES</h1>
                        <p>Please email for information related to sales or exhibitions.</p>
                        <p>Commissions are currently <strong>open</strong>.</p>
                    </span>
                    <span className="links">
                        <br />
                        <h1>LINKS</h1>
                        <p>Instagram: <a href="https://www.instagram.com/lordclaude/?hl=en" target="_blank" rel="noreferrer">@claudecreighton</a></p>
                        <p>Email: <a href="mailto:claude@claudecreighton.art" target="_blank" rel="noreferrer">claude@claudecreighton.art</a></p>
                        <p>CV: <a href="/cv.pdf">here</a></p>
                    </span>
                    <span className="exhibitions">
                        <br />
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
