import AppLayout from '../layouts/AppLayout.jsx'
import { AppProvider } from '../context/AppContext.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'
import Visitor from '../middleware/Visitor.jsx'

function VisitorApp(props) {
    return (
        <AuthProvider>
            <Visitor>
                <AppProvider>
                    <AppLayout title={props.title}>
                    {props.children}
                    </AppLayout>
                </AppProvider>
            </Visitor>
        </AuthProvider>  
    )
}

export default VisitorApp
