import React from 'react'
import './NavBar.css';
import logo from '../../Images/logo.png'

import {Link} from "react-scroll"

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'главное'
        },{
            id: 2,
            link: 'новости'
        },{
            id: 3,
            link: 'курсы'
        },{
            id: 4,
            link: 'коллектив'
        },{
            id: 5,
            link: 'оставить заявку'
        },{
            id: 6,
            link: 'контакты'
        }
    ] 


    return (
        <header>
            <img src={logo} alt={`${logo}`} className="logoImg" />
            <ul>
                {links.map(({id, link}) => (
                    <li key={id}>
                        <Link to={link} smooth duration={900}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default NavBar