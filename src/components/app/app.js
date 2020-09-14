import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    // RestoService.getMenuItems()
    //     .then(menu => console.log(menu))
    //     .catch(error => {console.log('Произошла ошибка')})

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/:id' component={ItemPage}/>
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;