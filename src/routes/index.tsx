import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Profile from '../pages/profile';
import Repository from '../pages/repository';

const Routes: React.FC = () =>(
    <Switch>
        <Route path="/" exact component={Profile}></Route>
        <Route path="/repository" component={Repository}></Route> 
    </Switch>
)

export default Routes;