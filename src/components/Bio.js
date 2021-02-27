import { motion } from 'framer-motion'
import React from 'react'
import { BioWrapper } from '../elements'
import bioImg from '../images/other/bioImg.jpg'

export const Bio = () => {

    return (
        <BioWrapper>
            <motion.Img className="bioImg" whileHover={{ scale: 1.01, opacity: 1 }} src={bioImg} />
            <motion.div className="bioText" whileHover={{ scale: 1.01, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                <p><strong>Claude Creighton</strong> is a multidisciplinary artist from Adelaide, Australia. Creighton playfully engages with drawing and installation to investigate the porous relationship between storytelling and cultural exploration of fear. Their drawings and installations are rich with symbolism, streams of observation, terror and humour. There is a strong auto-ethnographical element to their work where surrogate characters are used to explore abstruse internal reckonings. Creighton’s work refers to traditions rooted in folk art, fairytale and mythos and they remain inspired by artist of the middle ages onwards.
                    <br />
                    <br />
                    <strong>Creighton</strong> is a recent graduate with First Class Honours from Adelaide Central School of Art, South Australia. They have been involved in national community arts departments including Woodfordia, WOMAD, Evolve, and have exhibited in various group shows throughout South Australia and Melbourne.
                    </p>

            </motion.div>
        </BioWrapper>
    )
}