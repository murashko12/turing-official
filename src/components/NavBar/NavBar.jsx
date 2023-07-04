import React from 'react'
import './NavBar.css';
import logo from '../../Images/logo.png'

import {useState} from 'react'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import {Link} from "react-scroll"

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'главное'
        },
        // {
        //     id: 2,
        //     link: 'новости'
        // },
        {
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

            <ul className={nav ? 'active'  : 'NavBarUl'}>
                {links.map(({id, link}) => (
                    <li key={id}>
                        <Link onClick={() => setNav(false)} to={link} smooth duration={900}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav) } className='mobileBtn'>
                
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
            </div>
        </header>
    )
}

export default NavBar