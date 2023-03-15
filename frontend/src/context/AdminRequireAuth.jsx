import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const AdminRequireAuth = ({children}) => {
    const auth = useAuth()
    
    if (!auth.user) {
        return <><Navigate to="/adminlogin" replace={true} /></>
    }

    return children
}