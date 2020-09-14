import React from 'react';
import './menu-list-item.scss';
import { Link } from 'react-router-dom';

const MenuListItem = ({menuItem}) => {
    const {titel, price, url, category} = menuItem;

    return (
        <li className="menu__item">
            <Link to={`/${menuItem.id}`}>
                <div className="menu__title">{titel}</div>
                <img className="menu__img" src={url} alt={titel}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
                <span className = {`menu__category_Img ${category}`}></span>
            </Link>
        </li>
    )
}

export default MenuListItem;