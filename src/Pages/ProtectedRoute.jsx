import { Navigate } from 'react-router-dom'
import { useAuthDataProvider } from '../Provider/AuthProv';}

const ProtectedRoute = ({ element: Component, isAuthenticated, user, token }) => {
    return isAuthenticated ? (
        <Component user={user} token={token}/>
    ) :
    (
        <Navigate to="/login" replace />
    )
};

export default ProtectedRoute;