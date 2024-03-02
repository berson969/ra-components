import './App.css';
import './css/ShopItem.css'
import './components/Calendar/Calendar.css';

import { item } from "./item"
import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';

import { ShopItemFunc } from "./components/ShopItemFunc";
import { ShopItemClass } from "./components/ShopItemClass";
import { Calendar } from "./components/Calendar";

import React from "react";

function App() {
  return (

    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/func"  element={<ShopItemFunc item={item} />} />
            <Route path="/class"  element={<ShopItemClass item={item} />} />
            <Route path="/calendar"  element={<Calendar date={new Date(2017, 2, 8)} />} />
        </Routes>
    </Router>
  )
}

function HomePage() {
    return (
        <div className="top-panel">
            <div className="top-panel__container">
                <img src="https://netology-code.github.io/mq-homeworks/media-features/mobile-menu/img/logo.svg" className="logo" alt="Логотип компании Нетология"/>
                <h1 className="title">Компоненты</h1>
            </div>

            <div className="App" >

                <h3>Домашнее задание по теме "Компоненты React"</h3>
                <nav>
                    <ul>
                        <li className="App-link"><Link to="/func">функциональный компонент</Link></li>
                        <li className="App-link"><Link to="/class">class-based компонент</Link></li>
                        <li className="App-link"><Link to="/calendar">Календарь</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default App;
