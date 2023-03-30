import React from 'react'
import { Slider } from '../Slider/Slider'
import './Courses.css'

// ------------ Frontend ------------
import front1 from '../../Images/Frontend/front1.jpeg'
import front2 from '../../Images/Frontend/front2.jpeg'
import front3 from '../../Images/Frontend/front3.jpeg'
import front4 from '../../Images/Frontend/front4.jpeg'
import front5 from '../../Images/Frontend/front5.jpeg'
import front6 from '../../Images/Frontend/front6.jpeg'
// ------------ BackendJava ------------
import backjava1 from '../../Images/BackendJava/backjava1.jpeg'
import backjava2 from '../../Images/BackendJava/backjava2.jpeg'
import backjava3 from '../../Images/BackendJava/backjava3.jpeg'
import backjava4 from '../../Images/BackendJava/backjava4.jpeg'
import backjava5 from '../../Images/BackendJava/backjava5.jpeg'
import backjava6 from '../../Images/BackendJava/backjava6.jpeg'
// ------------ BackendPy ------------
import backpy1 from '../../Images/BackendPy/backpy1.jpeg'
import backpy2 from '../../Images/BackendPy/backpy2.jpeg'
import backpy3 from '../../Images/BackendPy/backpy3.jpeg'
import backpy4 from '../../Images/BackendPy/backpy4.jpeg'
import backpy5 from '../../Images/BackendPy/backpy5.jpeg'
// ------------ SQL ------------
import sql1 from '../../Images/SQL/sql1.jpeg'
import sql2 from '../../Images/SQL/sql2.jpeg'
import sql3 from '../../Images/SQL/sql3.jpeg'
import sql4 from '../../Images/SQL/sql4.jpeg'
import sql5 from '../../Images/SQL/sql5.jpeg'
import sql6 from '../../Images/SQL/sql6.jpeg'
// ------------ Android ------------
import andr1 from '../../Images/Android/andr1.jpeg'
import andr2 from '../../Images/Android/andr2.jpeg'
import andr3 from '../../Images/Android/andr3.jpeg'
import andr4 from '../../Images/Android/andr4.jpeg'
import andr5 from '../../Images/Android/andr5.jpeg'
import andr6 from '../../Images/Android/andr6.jpeg'

const Courses = () => {
    const BackendJava = [
        {
            id: 1,
            src: backjava1
        },{
            id: 2,
            src: backjava2
        },{
            id: 3,
            src: backjava3
        },{
            id: 4,
            src: backjava4
        },{
            id: 5,
            src: backjava5
        },{
            id: 6,
            src: backjava6
        }
    ]
// ================================================================================================
    const frontend = [
        {
            id: 1,
            src: front1
        },{
            id: 2,
            src: front2
        },{
            id: 3,
            src: front3
        },{
            id: 4,
            src: front4
        },{
            id: 5,
            src: front5
        },{
            id: 6,
            src: front6
        }
    ]
// ================================================================================================
    const SQL = [
        {
            id: 1,
            src: sql1
        },{
            id: 2,
            src: sql2
        },{
            id: 3,
            src: sql3
        },{
            id: 4,
            src: sql4
        },{
            id: 5,
            src: sql5
        },{
            id: 6,
            src: sql6
        }
    ]
// ================================================================================================
    const Android = [
        {
            id: 1,
            src: andr1
        },{
            id: 2,
            src: andr2
        },{
            id: 3,
            src: andr3
        },{
            id: 4,
            src: andr4
        },{
            id: 5,
            src: andr5
        },{
            id: 6,
            src: andr6
        }
    ]
// ================================================================================================
const BackendPy = [
    {
        id: 1,
        src: backpy1
    },{
        id: 2,
        src: backpy2
    },{
        id: 3,
        src: backpy3
    },{
        id: 4,
        src: backpy4
    },{
        id: 5,
        src: backpy5
    }
]
// ================================================================================================

    return (
        <div name="курсы" className="coursesContent">
            <h1>наши курсы</h1>

            <h3>Backend Python</h3>
            <Slider>
                {BackendPy.map(({id, src}) => (
                    <img key={id} src={src} alt={`${src}`} className={src} />
                ))}    
            </Slider>

            <h3>Frontend</h3>
            <Slider>
                {frontend.map(({id, src}) => (
                    <img key={id} src={src} alt={`${src}`} className={src} />
                ))}    
            </Slider>

            <h3>Backend Java</h3>
            <Slider>
                {BackendJava.map(({id, src}) => (
                    <img key={id} src={src} alt={`${src}`} className={src} />
                ))}    
            </Slider>

            <h3>SQL</h3>
            <Slider>
                {SQL.map(({id, src}) => (
                    <img key={id} src={src} alt={`${src}`} className={src} />
                ))}    
            </Slider>

            <h3>Android</h3>
            <Slider>
                {Android.map(({id, src}) => (
                    <img key={id} src={src} alt={`${src}`} className={src} />
                ))}    
            </Slider>
            
        </div>
    )
}

export default Courses