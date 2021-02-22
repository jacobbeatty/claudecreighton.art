import React from 'react'
import { FilterWrapper } from '../elements'
import { Link } from 'gatsby'




export const Filters = () => {

    return (
        <FilterWrapper>
            <ul>
                <span>
                    <li>
                        <Link activeStyle={{ color: "red" }} to='/works'>ALL</Link>
                    </li>
                </span>
                <span>
                    <li>
                        <Link activeStyle={{ color: "red" }} to='/honours'>HONOURS</Link>
                    </li>
                </span>
                <span>
                    <li>
                        <Link activeStyle={{ color: "red" }} to='/bva'>BVA</Link>
                    </li>
                </span>
                <span>
                    <li>
                        <Link activeStyle={{ color: "red" }} to='/drawing'>DRAWING</Link>
                    </li>
                </span>

            </ul>
        </FilterWrapper>
    )
}