import { motion } from 'framer-motion'
import React from 'react'
import { ContactWrapper } from '../elements'
import Img from 'gatsby-image'

export const Contact = ({ data }) => {


    return (
        <ContactWrapper>

            <Img alt="Exhibition work" className="contactImg" fluid={data.contactImg.childImageSharp.fluid} />
            <motion.div className="contactText" whileHover={{ scale: 1.01, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                <h1>ENQUIRES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ex!</p><br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ratione!</p><br />
                <h1>LINKS</h1>
                <a href="/" target="_blank"></a> <br />
                <a href="/" target="_blank"></a> <br />
                <a href="/" target="_blank"></a> <br />
                <h1>EXHIBITIONS</h1>
                <p>(UPCOMING) MAGIC METAMORPHOUS, SEPTEMBER, URBAN COW</p> <br />
                <p>(UPCOMING) RED ROOM, SEPTEMBER, BRUNSWICK GALLERY</p> <br />
            </motion.div>
        </ContactWrapper>
    )
}

export const query = graphql`
query contactImg{
    contactImg: file(relativePath: {eq: "contact.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
        }
      }
    }
  }
`