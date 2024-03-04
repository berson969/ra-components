import "../../css/ShopItem.css"
import React from 'react';

export const ShopItemFunc = ({ item }) => {
    const { brand, title, description, descriptionFull, currency, price } = item;

    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <div className="main-content">
                    <h2>{ brand }</h2>
                    <h1>{ title }</h1>
                    <h3>{ description }</h3>
                    <div className="description">
                        { descriptionFull }
                    </div>
                    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{ currency }{ price.toFixed(2)}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
