import React from 'react'
import './Main.css';
import mpeiLogo from '../../Images/mpeiLogo.png'

const Main = () => {

    const links = [
        {
            id: 1,
            link: 'Frontend'
        },{
            id: 2,
            link: 'Java backend'
        },{
            id: 3,
            link: 'SQL'
        },{
            id: 4,
            link: 'Android'
        }
    ] 


    return (
        <main name="главное">
            <p>Добро пожаловать в наш </p>
            <p>IT-клуб</p>
            <h1>turing</h1>
            <div className="mainDescription">
                <img src={mpeiLogo} alt={`${mpeiLogo}`} className="mpeiLogoImg" />
                Образовательная платформа, предоставляющая возможность студентам НИУ МЭИ получить практический опыт в свере IT по направлениям:
                <br />
                <br />
                Frontend, Java и Python backend, SQL, Android
            </div>
        </main>
    )
}

export default Main