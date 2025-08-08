import React from 'react'
import {Link} from 'gatsby';
import mailcon from './mailcon.png'
import mumara from './mumara.png'
import './banner.css'

function Banner() {
    return (
        <div className='header-ad-block'>
            <div className='banner-content'>
                Sponsoring at Mailcon Loudly and Proudly in Meetup 2022!
            </div>
            <div className='banner-logo'>
                <Link to="https://mailcon.com/" target="_blank" title="Sponsoring at Mailcon Loudly and Proudly in Meetup 2022!"><img src={mailcon} alt="Sponsoring at Mailcon Loudly and Proudly in Meetup 2022!" /></Link> <span>+</span> <Link to="https://mumara.com/" target="_blank" title="Mumara"><img src={mumara} alt="Mumara" /></Link>
            </div>
        </div>
    )
}

export default Banner