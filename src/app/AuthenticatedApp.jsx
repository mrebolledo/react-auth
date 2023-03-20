import AppLayout from '../layouts/AppLayout.jsx'
import { AppProvider } from '../context/AppContext.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'
import Authenticated from '../middleware/Authenticated.jsx'

function AuthenticatedApp(props) {
    return (
        <AuthProvider>
            <Authenticated>
                <AppProvider>
                    <AppLayout title={props.title}>
                    {props.children}
                    </AppLayout>
                </AppProvider>
            </Authenticated>
        </AuthProvider>  
    )
}

export default AuthenticatedApp
