import React from 'react';
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import LayoutIndex from '@/components/LayoutsComponent/LayoutIndex';
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from 'next/image';
import ProfileAvatar from 'public/img/zeus.png';
import Avatar from '@/components/Avatar/Avatar';

// md:mr-56 lg:mr-72 lg:mr-80

const User = () => {
    const [isShow, setShow] = useState(true);
    const [isActive, setActive] = useState(true);

    return (
        <LayoutIndex title="User">

            <div className="relative flex justify-center my-14 flex-col items-center">
                <div className="relative flex flex-col justify-center items-center bg-secondary w-11/12 h-auto text-white py-8 md:w-2/3 lg:w-2/5 rounded-lg">
                    <div className="flex  items-end -space-x-2">
                        <Image src={ProfileAvatar} width={125} height={72} className="rounded-full ring-2 ring-primary-400" alt="User Avatar" />
                        <FaRegEdit className="md:text-lg" onClick={()=>setActive(!isActive)} />
                        <Avatar isActive={isActive} />
                    </div>
                    <form className="container mx-auto my-6 w-10/12  flex flex-col justify-center gap-4 p-4 bg-white border-4 rounded-md font-medium border-primary-400 md:w-2/3 ">
                        <div className="relative flex items-center flex-col">
                            <label className="text-sm font-Saira text-black md:text-lg">Nombre</label>
                            <input
                                className="w-full h-8 px-3 py-1 bg-[#ececec] text-secondary rounded-md font-Saira font-medium border-2 border-black placeholder:text-[#777777] placeholder:text-center placeholder:text-sm md:h-10"
                                type="text" placeholder="Multi"
                            />
                        </div>

                        <div className="relative flex items-center flex-col">
                            <label className="text-sm font-Saira text-black md:text-lg">Email</label>
                            <input
                                className="w-full h-8 px-3 py-1 bg-[#ececec] text-secondary rounded-md font-Saira font-medium border-2 border-black placeholder:text-[#777777] placeholder:text-center placeholder:text-sm md:h-10"
                                type="email" placeholder="multievents@gmail"
                            />
                        </div>

                        <div className="relative flex items-center flex-col ">
                            <label className="text-sm font-Saira text-black md:text-lg">Contraseña</label>
                            <div className="w-full flex items-center justify-center">
                                <AiOutlineEye className={`${isShow ? 'text-secondary absolute left-2.5 md:left-6 md:text-lg' : 'hidden'}`} onClick={() => setShow(!isShow)} />
                                <AiOutlineEyeInvisible className={`${isShow ? 'hidden' : 'text-secondary absolute left-2.5 md:left-6 md:text-lg'}`} onClick={() => setShow(!isShow)} />
                                <input
                                    className="w-full h-8 py-1 px-8 bg-[#ececec] text-secondary  rounded-md font-Saira font-medium border-2 border-black placeholder:text-[#777777] placeholder:text-center placeholder:text-sm md:h-10 md:px-14 "
                                    type={`${isShow ? 'password' : 'text'}`} placeholder="Mínimo 8 caracteres"

                                />
                            </div>
                        </div>

                        <div className="relative flex items-center flex-col -mt-6 md:-mt-4">
                            <input className="w-8/12 h-10 bg-primary-400 p-2 rounded-md font-Saira font-bold text-sm text-secondary mt-6 hover:-translate-y-0.5 hover:shadow-md"
                                type="submit" value="Actualizar datos" />
                        </div>
                    </form>
                </div>
            </div>
        </LayoutIndex>


    )
}

export default User 