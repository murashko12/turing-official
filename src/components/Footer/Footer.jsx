import React from 'react'

import './Footer.css'
import mpeiLogo1 from '../../Images/mpeiLogo1.png'

import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer name="контакты">
            <div className="mpei">
                <img src={mpeiLogo1} alt={`${mpeiLogo1}`} />
                <br />
                <p>Контактная информация НИУ МЭИ</p>
                <br />
                <p><b>Адрес:</b> 111250, Россия, г. Москва, Красноказарменная улица, дом 14, стр. 1</p>
                <br />
                <p><b>Справочная МЭИ:</b> +7 495 362-75-60</p>
                <br />
                <p><b>Email:</b> universe@mpei.ac.ru</p>
            </div>

            <div className="socialMedia">
                Присоединяйтесь к нам в социальных сетях
                <br />
                <br />
                
                    <p>Наша группа VK</p>
                    <a href={"https://vk.com/turing_mpei"} target="_blank" rel="noreferrer">
                        <FaVk size={40} />
                    </a>
                    <br />
                    <p>Наш telegram - канал</p>
                    <a href={"#"} target="_blank" rel="noreferrer">
                        <FaTelegramPlane size={40} />
                    </a>
                
            </div>
            
        </footer>
    )

}
export default Footer