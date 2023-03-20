import { useState, createContext} from 'react'

const AppContext = createContext()

function AppProvider(props) {
    const [loadingMessage, setLoadingMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    return (
        <AppContext.Provider
            value={{
                loadingMessage,
                errorMessage,
                setLoadingMessage,
                setErrorMessage,
                successMessage,
                setSuccessMessage,
                title: props.title
            }}
        >    
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider} 