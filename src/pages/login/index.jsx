import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiKey } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'
import LayoutIndex from '@/components/LayoutsComponent/LayoutIndex'
import useAuth from '@/hooks/useAuth'
import Spinner from '@/components/Spinner/Spinner'

export default function Login() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.email)
            router.push("/");
    }, [auth]);

    const handleGoogleAuth = async (idToken) => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-auth`, { "idToken": idToken });

            console.log(data);

            if (data.msg) {
                toast.success(data.msg);
                return;
            }

            localStorage.setItem("token", data.token);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                }
            }

            const { data: info } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/my-profile`, config);

            const userInfo = {
                "username": info.username,
                "email": info.email,
                "avatar": info.avatar.url,
                "token": data.token,
                "privileges": info.accessList
            };

            setAuth(userInfo);


        } catch (error) {
            toast.error(error.response.data.msg);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes('')) {
            toast.error("Todos los campos son requeridos");
            return;
        }

        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, { email, password });

            localStorage.setItem("token", data.token);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                }
            }

            const { data: info } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/my-profile`, config);

            const userInfo = {
                "username": info.username,
                "email": info.email,
                "avatar": info.avatar.url,
                "token": data.token,
                "privileges": info.accessList
            };

            setAuth(userInfo);

        } catch (error) {
            toast.error(error.response.data.msg);
        }

    }

    return (
        <LayoutIndex title="Login" visible={false}>

            <div className="flex h-screen items-center justify-center">

                <div className="w-10/12 lg:w-[65%] h-[700px] inline-block lg:flex shadow-2xl rounded-3xl">
                    <div className="hidden lg:flex bg-primary-400  md:w-1/2 lg:rounded-tr-none lg:rounded-l-3xl">

                    </div>


                    <div className="lg:w-1/2 h-full rounded-3xl lg:flex lg:flex-col lg:justify-center">
                        <div className="bg-primary-400 lg:bg-white pt-5 pb-7 rounded-t-3xl lg:rounded-t-none lg:rounded-tr-3xl">
                            <div className="container mx-auto w-10/12 md:w-11/12 lg:w-2/3 flex flex-col justify-center items-center gap-4">
                                <Image src="/img/MultiEvents.png" width={120} height={120} alt="Logo MultiEvents" />
                                <div className="w-full flex flex-col gap-2">
                                    <h1 className="font-Saira font-bold text-3xl text-center">Hello Again!</h1>
                                    <p className="font-Saira text-[#3a3a3a] text-center"> Bienvenido a MultiEvents vive la mejor experiencia junto a nosotros </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-3/4">
                            <form className="container mx-auto w-10/12 sm:w-4/5 lg:w-2/3 flex flex-col justify-center gap-3 pt-12 pb-6" onSubmit={(e) => handleSubmit(e)}>
                                <div className="relative flex items-center">
                                    <input
                                        className="w-full h-11 px-3 py-1 bg-[#ececec] rounded-md font-Saira font-medium placeholder:text-[#777777] focus:outline-primary-400 focus:outline-offset-2"
                                        type="email" placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <MdOutlineAlternateEmail size="1.5rem" color="#777777" className="absolute right-5" />
                                </div>

                                <div className="relative flex items-center">
                                    <input
                                        className="w-full h-11 px-3 py-1 bg-[#ececec] rounded-md font-Saira font-medium placeholder:text-[#777777] focus:outline-primary-400 focus:outline-offset-2"
                                        type="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <FiKey size="1.5rem" color="#777777" className="absolute right-5" />

                                </div>
                                <input className="w-full bg-primary-400 p-2 rounded-md font-Saira font-bold text-lg mt-6 hover:cursor-pointer hover:bg-primary-500 shadow-sm ease-in duration-100"
                                    type="submit" value="Acceder" />
                            </form>

                            <hr className="w-3/4 lg:w-1/2 mx-auto border-[#c9c9c9]" />
                            <div className="mx-auto w-10/12 sm:w-4/5 lg:w-2/3 pt-5 mb-2 flex justify-center">
                                <GoogleLogin
                                    theme='filled_black'
                                    onSuccess={credentialResponse => {
                                        handleGoogleAuth(credentialResponse.credential);
                                    }}

                                    onError={() => {
                                        toast.error('Login Error');
                                    }}
                                />
                            </div>
                            {
                                loading && <Spinner />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </LayoutIndex>
    )
}
