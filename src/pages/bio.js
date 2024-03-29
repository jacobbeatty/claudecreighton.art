import * as React from "react"
import { Container } from "../components"
import { motion } from 'framer-motion'
import { BioWrapper } from '../elements'

import Img from 'gatsby-image'

const BioPage = ({ data }) => {
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
                <BioWrapper>
                    {/* <motion.Img className="bioImg" animate={{ opacity: .95 }} src={bioImg} /> */}

                    <Img alt="Claude Creighton" className="bioImg" fluid={data.bioImg.childImageSharp.fluid} />
                    <motion.div className="bioText" whileHover={{ scale: 1.01, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                        <p><strong>Claude Creighton</strong> is a multidisciplinary artist from Adelaide, Australia. Creighton playfully engages with drawing and installation to investigate the porous relationship between storytelling and cultural exploration of fear. Their drawings and installations are rich with symbolism, streams of observation, terror and humour. There is a strong auto-ethnographical element to their work where surrogate characters are used to explore abstruse internal reckonings. Creighton’s work refers to traditions rooted in folk art, fairytale and mythos and they remain inspired by artist of the middle ages onwards.
                    <br />
                            <br />
                    Creighton is a recent graduate with First Class Honours from Adelaide Central School of Art, South Australia. They have been involved in national community arts departments including Woodfordia, WOMAD, Evolve, and have exhibited in various group shows throughout South Australia and Melbourne.  </p>
                    </motion.div>
                    {/* <BioText className="bioSVG" /> */}
                </BioWrapper>
            </motion.main>
        </Container>
    )
}

export default BioPage

export const query = graphql`
query bioImg{
    bioImg: file(relativePath: {eq: "bioImg.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
