import React from 'react'
import './RequestForm.css'
const RequestForm = () => {
  return (
    <div name="оставить заявку" className="RequestForm">
        <form action="">
            <h3>Записаться на курс</h3>
            <input type="text" name="first-name" placeholder="Имя"/>
            <input type="text" name="last-name" placeholder="Фамилия"/>
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="" placeholder="Институт"/>
            <input type="text" name="group" placeholder="Группа"/>
            <input type="text" name="course" placeholder="Направление"/>

            <input type="text" name="vk-link" placeholder="Ссылка на VK"/>

            <textarea name="message" placeholder="Сопроводительное письмо " id="" cols="50" rows="10"></textarea>
            <button><b>Отправить</b></button>
            
        </form>
    </div>
  )
}

export default RequestForm