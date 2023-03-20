import {
    createBrowserRouter,
} from "react-router-dom";
import VisitorApp from '../app/VisitorApp'
import AuthenticatedApp from '../app/AuthenticatedApp'
import Login from '../views/Login';
import Register from '../views/Register';
import Welcome from '../views/Welcome';
import NotFound from '../views/NotFound';

const routes = createBrowserRouter([
    {
        path: "/login",
        element:  <VisitorApp title="Loguear">
                        <Login />
                    </VisitorApp>,
    },
    {
        path: "/register",
        element:    <VisitorApp title="Registrarse">
                        <Register />
                    </VisitorApp>,
    },
    {
        path : "/",
        element :  
                    <AuthenticatedApp title="Bienvenido/a">
                        <Welcome />
                    </AuthenticatedApp>
    },
    {
        path: "*",
        element:  <NotFound />
    },

]);

export default routes