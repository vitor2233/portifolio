import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Courses from './Components/Courses';
import Experience from './Components/Experience';
import Formation from './Components/Formation';
import Projects from './Components/Projects';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Projects} path="/" exact />
            <Route component={Courses} path="/courses" />
            <Route component={Experience} path="/experience" />
            <Route component={Formation} path="/formation" />
        </BrowserRouter>
    );
}

export default Routes;
