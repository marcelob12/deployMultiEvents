import axios from 'axios';
import { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [modalModUser, setModalModUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [privileges, setPrivileges] = useState({});
    const [loading, setLoading] = useState(false);

    // Modal Function
    const handleModalModUser = () => {
        setModalModUser(!modalModUser);
    }

    // User Functions
    const getUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/`, config);
            setUsers(data);

        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const chargeUserData = (user) => {
        setUser(user);
        setModalModUser(!modalModUser);
    }

    const getPrivileges = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/privilege/`, config);
            setPrivileges(data);

        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const createAccess = async (body) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/access`, body, config);
            toast.success(data.msg);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider
            value={{
                modalModUser,
                handleModalModUser,
                users,
                getUsers,
                user,
                chargeUserData,
                getPrivileges,
                privileges,
                loading,
                createAccess
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {
    UserProvider
}

export default UserContext 