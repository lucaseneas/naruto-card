import React from 'react';
import {Switch} from 'react-router-dom';
import { Route , Routes, Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

export default () => {
    return (
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/game' element={<Game/>}/>
            </Routes>
    );
}
