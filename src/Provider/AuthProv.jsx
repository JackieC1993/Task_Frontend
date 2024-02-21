import React from 'react';
import { useContext, createContext, useState } from 'react';

import axios from 'axios';

export const AuthData = createContext()

export function useAuthDataProvider() {
    return useContext(AuthData)
}

/*You can create another provider and only use it on a specific route.
i.e. if you create another provider (signUpProvider) and want to use specific values that differ from the global provider User
<Route path='/signup' element= {<SignUpProvider><Signup setUser={setUser} setToken={setToken}/></SignUpProvider> } />
*/

function AuthProv({ children }) {
    const API = import.meta.env.VITE_BASE_URL

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const isAuthenticated = user && token

    axios.defaults.headers.common["Authorization"] = token

    return (
        <AuthData.Provider value={{
            API,
            user,
            setUser,
            token,
            setToken,
            isAuthenticated
        }}>
            {children}
        </AuthData.Provider>
    );
}

export default AuthProv;