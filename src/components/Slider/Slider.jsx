import React, { cloneElement } from 'react'
import './Slider.css'
import {useState, useEffect, Children} from 'react'


const  PAGE_WIDTH = 300

export const Slider = ({children}) => {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className="main-container">
            <div className="window">
                <div className="all-pages-container">
                    {pages}
                </div>
            </div>
        </div>
    )
}