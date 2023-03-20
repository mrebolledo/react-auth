import React from 'react';
import { useContext, Fragment} from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { useAuth } from '../context/AuthContext';
import TopBar  from '../components/TopBar.jsx'
import { FaUserAlt } from 'react-icons/fa'
import ErrorMessage  from '../components/ErrorMessage.jsx'
import LoadingMessage from '../components/LoadingMessage.jsx'
import SuccessMessage from '../components/SuccessMessage.jsx'

function AppLayout({children, ...props}) {
    const {
        loadingMessage,
        errorMessage,
        successMessage,
    } = useContext(AppContext)

    return (
        <Fragment>
            <TopBar />
            <div className="w-full p-5">
                { errorMessage && <ErrorMessage message={errorMessage}/>}
                { loadingMessage && <LoadingMessage message={loadingMessage}/>}
                { successMessage && <SuccessMessage message={successMessage}/>}
                <div className="bg-white rounded-md p-3 shadow-md">
                    <h1 className="flex font-bold text-3xl border-b-4 text-primary border-secondary">
                    <FaUserAlt size={30} className="mr-4" />
                    {props.title}
                    </h1>
                    { children }
                </div>
            </div>
        </Fragment>
    )
}

export default AppLayout