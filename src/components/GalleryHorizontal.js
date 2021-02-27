import React from 'react'
import { HorizontalGalleryWrapper } from '../elements'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
import { SRLWrapper } from "simple-react-lightbox";
export const HorizontalGallery = () => {




    return (

        <HorizontalGalleryWrapper>

            <StaticQuery
                query={
                    graphql`
                    {
                        allFile(filter: {sourceInstanceName: {eq: "art"}}, sort: {fields: relativePath}) {
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
                    <SRLWrapper options={options} className="SRLWrapper">
                        <div className="image ">{data.allFile.edges.map((edge) => (<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.name} />))}</div>
                    </SRLWrapper>
                )}
            />
        </HorizontalGalleryWrapper>
    )
}









const options = {
    buttons: {
        backgroundColor: 'transparent',
        iconColor: 'white',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
        size: '40px'
    },
    caption: {
        captionColor: "white",
        captionFontFamily: "Newsreader",
        captionTextTransform: "uppercase",
        captionFontSize: "1.5em"
    },
    thumbnails: {
        showThumbnails: false,
        // thumbnailsAlignment: 'center',
        // thumbnailsContainerBackgroundColor: 'transparent',
        // thumbnailsContainerPadding: '0',
        // thumbnailsGap: '0 1px',
        // thumbnailsIconColor: '#ffffff',
        // thumbnailsOpacity: 0.4,
        // thumbnailsPosition: 'bottom',
        // thumbnailsSize: ['100px', '80px']
    }
}