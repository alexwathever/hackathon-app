import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }: any) {

    const location = useLocation();
    const logged = true;

    return (
        <Route {...rest}>
            {logged ? (<Component />) : (<Redirect to={{ pathname: '/404', state: { from: location } }} />)}
        </Route>)
};