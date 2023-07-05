import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }

            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/my-profile`, config);

                const info = {
                    "username": data.username,
                    "email": data.email,
                    "avatar": data.avatar.url,
                    token,
                    "privileges": data.accessList
                };

                setAuth(info);
            } catch (error) {
                toast.error(error);
                console.error(error);
            } finally {
                setLoading(false);
            }

        }

        authenticateUser();

    }, [])

    const logout = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext 