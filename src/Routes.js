import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Courses from './Components/Courses';
import Experience from './Components/Experience';
import Formation from './Components/Formation';
import Projects from './Components/Projects';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Projects} path={process.env.PUBLIC_URL + '/'} exact />
                <Route component={Courses} path={process.env.PUBLIC_URL + '/courses'} />
                <Route component={Experience} path={process.env.PUBLIC_URL + '/experience'} />
                <Route component={Formation} path={process.env.PUBLIC_URL + '/formation'} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
