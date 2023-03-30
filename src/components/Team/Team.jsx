import './Team.css';

import React from 'react'

import MishaGasin from '../../Images/Team/MishaGasin.jpeg'
import Mesnyankin from '../../Images/Team/Mesnyankin.jpeg'
import PashaZhukov from '../../Images/Team/PashaZhukov.jpeg'
import SashaKobzev from '../../Images/Team/SashaKobzev.jpeg'
import SonyaMarchinskaya from '../../Images/Team/SonyaMarchinskaya.jpeg'
import SashaFofanov from '../../Images/Team/SashaFofanov.jpeg'
import SashaGordov from '../../Images/Team/SashaGordov.jpeg'




const Team = () => {

    const ourTeam = [
        {
            id: 1,
            src: MishaGasin
        },{
            id: 2,
            src: Mesnyankin
        },{
            id: 3,
            src: PashaZhukov
        },{
            id: 4,
            src: SashaKobzev
        },{
            id: 5,
            src: SonyaMarchinskaya
        },{
            id: 6,
            src: SashaFofanov
        },{
            id: 7,
            src: SashaGordov
        }
    ]

    return (
        <div name="коллектив" className="teamContent">
            <h1>Наш коллектив</h1>
            <div className="teamCards">
                {
                    ourTeam.map(({id,src}) => (
                        <div key={id} className='teamCard'>
                            <img src={src} alt={`${src}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team