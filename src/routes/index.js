// import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom'
// import Home from '../pages/home'
// import Detail from '../pages/detail'
//
// export const BasicRoute = () =>
//         <HashRouter history={BrowserRouter}>
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/detail" component={Detail} />
//             </Switch>
//         </HashRouter>
//
// export default BasicRoute

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Tables from '../pages/Tables';
import AsycTables from '../pages/AsycTables';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import RootBreadcrumb from '../components/layout/RootBreadcrumb';
import SiderMenus from '../components/layout/SiderMenus';

export const SiderMenusRoute = () =>
    <Route path="*" component={SiderMenus}/>

export const RootBreadcrumbRoute = () =>
    <Route path="*" component={RootBreadcrumb}/>

export const ContentRoute = () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tables' component={Tables} />
        <Route exact path='/asyc-tables/:pageid' component={AsycTables} />
        <Redirect from="/asyc-tables" to="/asyc-tables/1"/>
        <Route exact path='/profile' component={Profile} />
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>

export default ContentRoute
