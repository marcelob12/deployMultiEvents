import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { IoPersonOutline } from 'react-icons/io5'
import { BsCalendar } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineClockCircle, AiOutlineQrcode } from 'react-icons/ai';
import useEvent from "@/hooks/useEvent";

const Ticket = ({ info, setQrInfo }) => {
    const { handleModalTicket, handleShareTicketModal } = useEvent();

    const date = new Date(info.tier.evenDate).toLocaleDateString();
    const time = new Date(info.tier.evenDate).toLocaleTimeString();
    const dataModal = {
        title: info.tier.eventTitle,
        time: time,
        date: date,
        location: info.tier.location,
        image: info.tier.image,

    };

    const functions = () => {
        console.log(dataModal, "<-- dataModal");
        setQrInfo(dataModal);
        handleModalTicket();
    }

    return (
        <div className="flex items-center justify-center w-[85%] md:w-3/5 lg:w-1/2 -space-x-4">
            <div className="flex bg-secondary flex-col w-full h-auto rounded-2xl text-white py-3 divide-y-2 divide-dashed divide-primary-400 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:justify-around">
                <div className="lg:w-3/4">
                    <div className="flex font-Saira justify-start flex-col px-6 lg:flex-row lg:justify-between lg:items-center">
                        <h3 className="uppercase text-sm w-full"># Orden-{info.id}</h3>
                        <div className="flex items-center justify-between lg:w-3/4">
                            <h1 className="font-extrabold w-4/6 md:w-11/12 text-2xl">{info.tier.eventTitle}</h1>
                            <button className="lg:hidden lg:my-2 hover:scale-110">
                                <FiShare2 size={24} onClick={handleShareTicketModal} />
                            </button>
                        </div>
                    </div>
                    <div className="font-Montserrat font-medium py-3 px-6 space-y-1.5 text-lg">
                        <div className="flex items-center space-x-2">
                            <FiMapPin className="text-primary-400" />
                            <p className="uppercase">{info.tier.location}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IoPersonOutline className="text-primary-400" />
                            <p className="uppercase">{info.tier.name}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BsCalendar className="text-primary-400" />
                            <p className="uppercase">{date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineClockCircle className="text-primary-400" />
                            <p className="uppercase">{time}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center lg:w-1/4">
                    <div className="flex flex-col justify-center items-center h-3/4 py-1">
                        <AiOutlineQrcode className="text-primary-400 hover:cursor-pointer" size={120} onClick={functions} />
                        <button className="font-Montserrat font-bold hover:font-extrabold" onClick={functions}>Canjear QR</button>
                    </div>
                    <button className="invisible lg:visible lg:my-2 hover:scale-110">
                        <FiShare2 size={24} onClick={handleShareTicketModal} />
                    </button>
                </div>
            </div>
            <div className="bg-[#d8d7d3] w-10 h-10 rounded-full" />
        </div>

    )
}

export default Ticket
