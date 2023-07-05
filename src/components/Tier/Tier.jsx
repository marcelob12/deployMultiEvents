import React from 'react'
import useEvent from '@/hooks/useEvent'

const Tier = ({ tier }) => {
    const { handleEditModalTier, handleMDelTier } = useEvent();
    return (
        <>
            <div className="w-full border-b p-5 font-Montserrat md:flex md:justify-between">
                <div>
                    <h3 className="font-bold text-lg">{tier.name}</h3>
                    <div className="flex gap-5  flex-wrap md:flex-col md:gap-0">
                        <span className="flex gap-2 font-medium">Capacidad: <p className="font-normal">{tier.capacity}</p></span>
                        <span className="flex gap-2 font-medium">Precio: <p className="font-normal">$ {tier.price} </p></span>
                        <span className="flex gap-2 font-medium">Visibilidad: {tier.visibility ? "Visible" : "Oculto"} </span>

                    </div>
                </div>
                <div className="flex mt-4 justify-between items-center md:gap-6">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm text-white uppercase font-bold rounded-lg w-5/12 md:w-auto hover: cursor-pointer"
                        onClick={() => handleEditModalTier(tier)}
                    >
                        Editar
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm text-white uppercase font-bold rounded-lg w-5/12 md:w-auto hover: cursor-pointer"
                        onClick={() => handleMDelTier(tier)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Tier