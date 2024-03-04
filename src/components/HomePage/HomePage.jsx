import "./HomePage.css";
import React from 'react';
import {Link, Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="panel">
            <img src="https://pro-kursy.com/wp-content/uploads/2023/04/netologiya.jpg" className="logo-color" alt="netology_color.png"/>
            <div className="panel-link">
                <div className="panel__title">
                    <h1 className="title">Компоненты</h1>
                </div>

                <div className="App" >

                    <h3>Домашнее задание по теме "Компоненты React"</h3>
                    <nav>
                        <ul>
                            <li className="App-link"><Link to="/func">функциональный компонент</Link></li>
                            <li className="App-link"><Link to="/class">class-based компонент</Link></li>
                            <li className="App-link"><Link to="/calendar">календарь</Link></li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
                <div className="footer">
                    <img src="https://netology-code.github.io/mq-homeworks/media-features/mobile-menu/img/logo.svg" className="logo-white" alt="Логотип компании Нетология"/>
                </div>
            </div>
        </div>
    )
}
