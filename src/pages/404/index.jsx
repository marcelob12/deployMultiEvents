import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function index() {
    return (
        <div className='font-Saira'>
            <div className='flex justify-center flex-col m-auto h-screen md:flex-row'>

                <div className='bg-primary-400 h-screen items-center text-center flex flex-col justify-center md:w-screen sm:gap-9 md:gap-5'>
                    <h2 className='font-bold text-7xl text-secondary md:text-9xl'>
                        404
                    </h2>
                    <p className='font-semibold text-xl md:text-3xl'>
                        ups...
                        <br />
                        Al parecer esta página no existe
                    </p>
                    <Link href="/" className=' bg-secondary font-medium text-white rounded-md p-2 m-5 md:p-5 md:text-lg md:font-semibold transition transform hover:-translate-y-0.5 hover:shadow-md' >
                        Volver a Eventos
                    </Link>
                </div>

                <div className='bg-white h-screen md:w-screen flex justify-center items-center'>
                <Image src='/img/404.gif' alt='404 gif' width={300} height={300} />

                </div>

            </div>
        </div>
    )
}
