import React from 'react';
import {Switch} from 'react-router-dom';
import { Route , Routes, Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Cards from './pages/Cards/Cards';

export default () => {
    return (
            <Routes>
                <Route exact path='/naruto-card' element={<Home/>}/>
                <Route exact path='/naruto-card/game' element={<Game/>}/>
                <Route exact path='/naruto-card/cards' element={<Cards/>}/>
            </Routes>
    );
}
