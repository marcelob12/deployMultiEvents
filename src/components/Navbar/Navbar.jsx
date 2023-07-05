import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiMenuAlt1, HiX, HiHome, HiUser, HiQuestionMarkCircle, HiLogout } from 'react-icons/hi'
import { BsTicketPerforated } from 'react-icons/bs'
import { RiUserSettingsLine } from 'react-icons/ri'
import DropdownUser from '../DropDownUser/DropdownUser'
import ProfileAvatar from 'public/img/zeus.png'
import Image from 'next/image'
import Sidebar from '../SideBar/Sidebar'
import useAuth from '@/hooks/useAuth'

const Navbar = ({ isAdmin }) => {
    const { auth } = useAuth();
    const [adm, setAdm] = useState(false);
    const [cli, setCli] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isSideBar, setIsSidebar] = useState(false);
    const { logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        auth.privileges?.forEach(p => {
            if (p.privilege.name != "Client")
                setAdm(true);
            else
                setCli(true);
        });

    }, [auth])


    const logoutFunction = () => {
        localStorage.removeItem("token");
        logout();
        router.push("/login");
    }

    return (
        <>
            <div className={`${isAdmin ? "gap-2" : "justify-between"} flex items-center h-16 px-8 w-full bg-secondary`}>
                <h1 className="font-Saira font-extrabold text-3xl text-white"><Link href="/">MultiEvents</Link></h1>

                <nav className={`${isAdmin ? "hidden" : "hidden lg:flex items-center h-full relative"}`}>
                    <Link
                        href="/"
                        className={`font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex items-center px-5 ${router.pathname == '/' ? "text-primary-400" : "text-white"}`}
                    >
                        Eventos
                    </Link>
                    <Link
                        href="/how"
                        className={`font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex items-center px-5 ${router.pathname == '/how' ? "text-primary-400" : "text-white"}`}
                    >
                        ¿Cómo funciona?
                    </Link>

                    {
                        adm &&
                        <Link
                            href="/admin/events"
                            className={`font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex items-center px-5 ${router.pathname == '/admin' ? "text-primary-400" : "text-white"}`}
                        >
                            Admin
                        </Link>
                    }

                    {
                        !auth.username &&
                        <Link
                            href="/login"
                            className={`font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex items-center px-5 ${router.pathname == '/login' ? "text-primary-400" : "text-white"}`}
                        >
                            Login
                        </Link>
                    }

                    {
                        auth.username &&
                        <>
                            <Link
                                href="/tickets"
                                className={`font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex items-center px-5 ${router.pathname == '/tickets' ? "text-primary-400" : "text-white"}`}
                            >
                                Mis Tickets
                            </Link>
                            <DropdownUser />
                        </>
                    }
                </nav>

                <HiMenuAlt1
                    size="1.8rem"
                    className={`${isAdmin ? "order-first" : "order-last"} lg:hidden text-primary-400 hover:scale-110 ease-in duration-100 hover:cursor-pointer`}
                    onClick={() => isAdmin ? setIsSidebar(!isSideBar) : setActive(!isActive)}
                />

                {
                    isAdmin && (
                        <button
                            className="text-black font-bold mr-10 lg:bg-primary-400 absolute right-0 lg:px-3 lg:py-2 uppercase rounded-lg hover:bg-primary-500"
                            onClick={logoutFunction}
                        >
                            <HiLogout className="text-primary-400 lg:hidden hover:" size={30} />
                            <span className="hidden lg:block">Cerrar sesión</span>
                        </button>
                    )
                }
            </div>


            <div className={`${isActive ? "flex w-full fixed h-screen top-0 z-50" : "hidden"}`}>
                <div className="w-1/2 bg-black bg-opacity-70 hover:cursor-pointer" onClick={() => setActive(!isActive)}></div>


                <div className="w-3/4 bg-secondary flex flex-col items-end">
                    <HiX size="1.8rem" className="text-primary-400 hover:scale-110 ease-in duration-100 m-4 hover:cursor-pointer" onClick={() => setActive(!isActive)} />

                    <nav className="w-full flex flex-col bg-gray-50 font-Montserrat font-bold text-xl ">
                        {
                            auth.username &&
                            <button
                                type="button"
                                className="font-Montserrat font-bold hover:bg-primary-400 hover:text-black h-full flex gap-4 items-center p-3 ease-in duration-75 text-white bg-secondary group"
                            >
                                <Image src={auth.avatar} width={32} height={32} className="rounded-full ring-2 group-hover:ring-black ring-primary-400 ease-in duration-75" alt="User Avatar" />
                                {auth.username}
                            </button>
                        }

                        <Link
                            href="/"
                            className={`flex gap-3 items-center w-full hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 ${router.pathname == '/' ? "bg-primary-400 text-black" : "bg-secondary text-white"}`}
                        >
                            <HiHome />
                            Eventos
                        </Link>
                        <Link
                            href="/how"
                            className={`flex gap-3 items-center w-full hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 ${router.pathname == '/how' ? "bg-primary-400 text-black" : "bg-secondary text-white"}`}
                        >
                            <HiQuestionMarkCircle />
                            ¿Cómo funciona?
                        </Link>

                        {
                            adm &&
                            <Link
                                href="/admin/events"
                                className={`flex gap-3 items-center w-full hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 ${router.pathname == '/how' ? "bg-primary-400 text-black" : "bg-secondary text-white"}`}
                            >
                                <RiUserSettingsLine />
                                Admin
                            </Link>
                        }


                        {
                            auth.username &&
                            <Link
                                href="/tickets"
                                className={`flex gap-3 items-center w-full hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 ${router.pathname == '/tickets' ? "bg-primary-400 text-black" : "bg-secondary text-white"}`}
                            >
                                <BsTicketPerforated />
                                Mis Tickets
                            </Link>
                        }


                        {
                            !auth.username &&
                            <Link
                                href="/login"
                                className={`flex gap-3 items-center w-full hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 ${router.pathname == '/login' ? "bg-primary-400 text-black" : "bg-secondary text-white"}`}
                            >
                                <HiUser />
                                Iniciar sesión
                            </Link>
                        }

                        {
                            auth.username &&
                            <button
                                className="flex gap-3 items-center w-full group hover:bg-primary-400 hover:text-black p-3 ease-in duration-75 text-white bg-secondary"
                                onClick={() => logoutFunction()}
                            >
                                <HiLogout />
                                Cerrar sesión
                            </button>
                        }
                    </nav>
                </div>
            </div>

            {
                (isSideBar && isAdmin) && (
                    <div className="flex bg-black fixed w-full h-screen top-0 bg-opacity-75 overflow-hidden" onClick={() => setIsSidebar(!isSideBar)}>
                        <Sidebar hidden={false} />
                    </div>
                )
            }
        </>
    )
}

export default Navbar