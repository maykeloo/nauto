import React from 'react'
import { LinkLabel, SubLink } from '../sidebarElements'

const Company = () => {

    const links = ['About', 'News','Event', 'Blog'];
    const link = links.map(link => <LinkLabel><SubLink>{link}</SubLink></LinkLabel>)

    return (
        <>
            {link}
        </>
    )
}

export default Company
