import React from 'react'
import { GalleryWrapper } from '../elements'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
export const BVAGallery = () => {

  return (
    <GalleryWrapper>
      <StaticQuery
        query={
          graphql`
          {
            allFile(filter: {relativeDirectory: {eq: "bva"}}) {
              edges {
                node {
                  id
                  name
                  relativePath
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
                      
            `
        }
        render={data => (
          <div className="image ">{data.allFile.edges.map((edge) => (<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.name} />))}</div>
        )}
      />

    </GalleryWrapper>
  )
}