import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Board from '../pages/Board/Board';
import { PathRouteProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import MainLayout from './MainLayout/MainLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const privateRoutes: PathRouteProps[] = [
    { path: '/board/:id', element: <Board /> }
];
const publicRoutes: PathRouteProps[] = [
    { path: '/login', element: <Login /> }
];

const AppRouter: FC = () => {

    return (
        <MainLayout>
            <BrowserRouter>
                <Routes>
                    {
                        privateRoutes.map(routeProps => <Route {...routeProps} key={routeProps.path} element={<PrivateRoute>{routeProps.element}</PrivateRoute>} /> )
                    }
                    { publicRoutes.map(routeProps => <Route {...routeProps} key={routeProps.path} />) }

                </Routes>
            </BrowserRouter>
        </MainLayout>
    )
}

export default observer(AppRouter);
