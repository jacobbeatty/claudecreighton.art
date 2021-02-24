import React from 'react'
import Img from 'gatsby-image'


export function Modal({ handler }) {

    return (
        <div className="modal" >
            <p>I'm a modal</p>
            <Img fluid={this} />
            <button type="button" onClick={handler}>Close Modal</button>
        </div>
    )
}

