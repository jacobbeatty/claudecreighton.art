import React from 'react'
import { GalleryWrapper } from '../elements'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
export const Gallery = () => {

    return (
        <GalleryWrapper>
            <StaticQuery
                query={
                    graphql`
                    {
                        allFile(filter: {sourceInstanceName: {eq: "art"}}) {
                          edges {
                            node {
                              id
                              name
                              relativePath
                              childImageSharp {
                                fluid {
                                  base64
                                  tracedSVG
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
                    <div className="image">{data.allFile.edges.map((edge) => (<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.name} />))}</div>
                )}
            />
        </GalleryWrapper>
    )
}