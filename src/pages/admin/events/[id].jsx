import { useEffect, useState } from 'react'
import Image from 'next/image'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { IoMdAddCircle } from 'react-icons/io'
import EventImage from 'public/img/EventImage.jpg'
import { useRouter } from 'next/router'
import useEvent from '@/hooks/useEvent'
import LayoutAdmin from '@/components/LayoutsComponent/LayoutAdmin'
import Tier from '@/components/Tier/Tier'
import ModalTier from '@/components/ModalsComponents/ModalTier'
import ModalDelTier from '@/components/ModalsComponents/ModalDelTier'
import Spinner from '@/components/Spinner/Spinner'

export default function Event() {
    const { event, getEvent, handleModalTier, loading } = useEvent();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id)
            getEvent(id);
    }, [router.query]);

    useEffect(() => {
        if (event.id) {
            // console.log(event.date);
            const date = event.date.split('T');
            const time = date[1].split(':');
            // console.log(`${date[0]} ${time[0]}:${time[1]}`);
        }
    }, [event]);

    const handleClickEdit = (e) => {
        e.preventDefault();
        router.push("/admin/events/new");
    }

    return (
        <LayoutAdmin title="Evento">
            {
                loading ?
                    <Spinner />
                    :
                    <>

                        <div className="flex justify-between" >
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <h1 className="text-3xl font-Montserrat font-extrabold">{event.title}</h1>
                                    <button className="text-gray-600 hover:text-black transition-colors" onClick={e => handleClickEdit(e)} >
                                        <HiOutlinePencilAlt size={24} />
                                    </button>
                                </div>
                                <button
                                    className="flex gap-3 items-center text-black font-bold mr-10 bg-primary-400 px-3 py-2 uppercase rounded-lg hover:bg-primary-500 w-fit"
                                    onClick={handleModalTier}
                                >
                                    <IoMdAddCircle size={25} />
                                    Nuevo Tier
                                </button>
                            </div>
                            <Image src={event.image} width={170} height={0} alt="Event image" className="ring-2 ring-primary-400 rounded-lg" />
                        </div>
                        <div className="bg-white shadow mt-10 rounded-lg flex flex-col">
                            {
                                event.tiers?.length ?
                                    event.tiers.map((tier) => (
                                        <Tier
                                            key={tier.id}
                                            tier={tier}
                                        />
                                    ))

                                    :

                                    <p className="text-center mt-5 p-10 uppercase text-gray-700 font-bold">
                                        No hay tiers disponibles en este evento
                                    </p>
                            }
                        </div>
                    </>
            }

            <ModalTier />
            <ModalDelTier />
        </LayoutAdmin >
    )
}
