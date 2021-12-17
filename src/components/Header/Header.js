import React from 'react'
import { BGVideo, Content } from './headerElements'

import bg from '../../video/bgheader.mp4'

const Header = () => {
    return (
        <>
            <Content>
               <BGVideo src={bg} autoPlay={true} muted loop={true}/>
            </Content> 
        </>
    )
}

export default Header
