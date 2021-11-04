import React from 'react'
import { BrowserRouter , Switch, Route} from 'react-router-dom'

import Home from '../views/home';
import Task from '../views/task';
import purpera from '../views/puerpera';

import claviculario from '../views/claviculario';


export default function Routers(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/task' exact component={Task}/>
                <Route path='/task/:id' exact component={Task}/>
                <Route path='/purpera' exact component={purpera}/>
                <Route path='/claviculario' exact component={claviculario}/>
            </Switch>
        </BrowserRouter>
        
        )
}