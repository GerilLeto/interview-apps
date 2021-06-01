import {BrowserRouter as Router,  RouteProps, Route, Switch, } from 'react-router-dom';
import Home from '../pages/home/index';
import MillerColumnsApp from '../pages/miller-columns/index';

/**
 * 全局路由表
 */
export const routes:RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: () => <MillerColumnsApp/>,
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home/>,
  },
  {
    path: '/miller-columns',
    exact: true,
    component: () => <MillerColumnsApp/>,
  },
];

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((val, key) => (
          <Route
            {...val}
            key={`route_${key}`} />
        ))}
      </Switch>
    </Router>
  );
};