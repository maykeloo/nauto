import React from 'react'
import { LinkLabel, SubLink } from '../sidebarElements'

const Product = () => {

    const links = ['Overview', 'Predictive Collision Alert', 'Driver Behavior Alerts', 'Self-Guided Coaching', 'Manager-Led Coaching', 'Incident Reporting', 'On-Demand Video'];
    const link = links.map(link => <LinkLabel><SubLink>{link}</SubLink></LinkLabel>)

    return (
        <>
            {link}
        </>
    )
}

export default Product
