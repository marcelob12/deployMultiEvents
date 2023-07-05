import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { HiIdentification, HiLogout } from 'react-icons/hi'
import ProfileAvatar from 'public/img/zeus.png'
import useAuth from '@/hooks/useAuth';

const DropdownUser = () => {
    const { auth, logout, loading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const end = () => {
        localStorage.removeItem("token");
        logout();
    }

    return (
        <div className="relative inline-block text-left h-full">
            <button
                type="button"
                className="font-Montserrat font-bold uppercase hover:text-primary-400 h-full flex gap-2 items-center px-5 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src={auth.avatar} width={35} height={35} className="rounded-full ring-2 ring-primary-400" alt="User Avatar" />
                {auth.username}
            </button>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link
                            href="/user"
                            className="flex items-center gap-3 font-Montserrat px-4 py-2 text-secondary hover:bg-gray-100 hover:font-medium"
                        >
                            <HiIdentification />
                            Mi información
                        </Link>
                        <button
                            className="flex items-center gap-3 w-full font-Montserrat px-4 py-2  text-secondary hover:bg-gray-100 hover:font-medium"
                            onClick={() => end()}
                        >
                            <HiLogout />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropdownUser