import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className="w-full py-7 flex flex-col justify-center items-center text-center bg-secondary">
                <div className="flex gap-2 items-center">
                    <Image
                        src="/img/MultiEvents1.png"
                        width={60}
                        height={60}
                        alt="Logo Footer"
                        placeholder="blur"
                        blurDataURL="/img/MultiEvents1.png" />
                    <h1 className=' text-white font-Saira font-bold text-3xl'>MultiEvents</h1>
                </div>
                <p className='font-Saira text-gray-50 text-lg mt-5 lg:w-1/2'>Somos tu plataforma de confianza, adquiere ya tus tickets de manera virtual, desde la comodidad de tu casa y de forma segura</p>
                <p className='font-Saira text-white mt-3'>Designed by MultiDevs 2023 &copy;</p>
            </div>

        </>
    )
}

export default Footer