import React, { useEffect } from "react";
import Image from 'next/image';
import { useState } from "react";
import { BiMap } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import Priceview from '@/components/PriceView'
import LayoutIndex from "@/components/LayoutsComponent/LayoutIndex";
import useEvent from '@/hooks/useEvent'
import useAuth from '@/hooks/useAuth';
import EventoP from '@/assets/EventPicture.png';
import { useRouter } from "next/router";
import LoaddingSpinnerPay from "@/components/PaymentLoader/LoadingSpinnerPay";
import Spinner from '@/components/Spinner/Spinner'

const BuyTicket = () => {
    const { event, getEvent, handleModalTier, loading, createOrder } = useEvent();
    const { auth } = useAuth();
    const router = useRouter();
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);
    const [tier, setTier] = useState([]);
    const [active, setActive] = useState();
    const [loader, setLoader] = React.useState(false);
    const { id } = router.query;


    useEffect(() => {
        console.log(count);
        if (id)
            getEvent(id);

    }, [router.query]);




    const handleLoader = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);

        router.push('/tickets');
    };



    const selectedItem = (value) => {
        setTier(value);
        setTotal(0)
        setCount(0)
    }

    const countIncrement = () => {
        console.log(count);
        if (tier.capacity > count) {
            setCount((count + 1));
            const totalA = tier.price == undefined ? 0 : tier.price * (count + 1);
            setTotal(totalA);
        }

    };

    const countDecrement = () => {
        if (count >= 1) {
            setCount(count - 1);
            const totalA = tier.price == undefined ? 0 : tier.price * (count - 1);
            setTotal(totalA);

        }
    };

    const sendData = () => {
        setLoader(true);
        const data = {
            total: total,
            count: count,
            date: new Date(),
            identifier: auth.email
        }
        createOrder(data, tier).then(() => {
            setLoader(false);
            router.push('/tickets');
        }).catch((error) => {
            console.log(error);
            setLoader(false);
        }
        );


    }




    return (
        <>
            <LayoutIndex title="BuyTicket">
                {
                    loader ? (
                        <div className="h-screen z-50">

                            <LoaddingSpinnerPay />
                        </div>


                    ) : (

                        <div className=" font-Saira md:flex md:flex-row md:mx-5 md:py-20 lg:py-14">
                            <div className="md:flex md:flex-col md:flex-1 ">
                                <div>
                                    <h2 className="font-bold text-xl my-1 md:text-4xl">
                                        {event.title}
                                    </h2>
                                    <div className="flex items-center text-sm my-1 md:text-lg">
                                        <AiOutlineCalendar size={22} />
                                        {new Date(event.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center text-sm md:text-lg">
                                        <BiMap size={22} /> {event.location}
                                    </div>
                                    <div className=" gap-y-3 flex justify-center">
                                        <Image src={EventoP} alt="Event image" className="my-3 md:w-3/4" />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="font-bold my-5 mx-3 text-xl md:text-4xl">
                                        Lista de precios
                                    </h2>
                                    <div className="md:text-lg">
                                        {
                                            event.tiers?.map(tier =>
                                                <div className="md:flex md:justify-center text-primary-400" key={tier.id}>
                                                    {
                                                        tier.capacity === 0 ?
                                                            (
                                                                <>
                                                                    <div className="bg-secondary font-Saira font-bold flex px-3 py-2 my-1 mx-2 rounded md:px-7 md:w-5/6 relative items-center justify-center">
                                                                        <hr className="w-full absolute right-0 left-0  border-2 border-primary-400" />
                                                                        <div className="w-full absolute right-0 left-0 flex justify-center items-center text-center">

                                                                            <p className="w-[20%] bg-secondary border-md rounded-md" >
                                                                                Agotado
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex-1 text-white">
                                                                            {tier.name}
                                                                        </div>

                                                                        <div className="flex-1 text-primary text-end ">
                                                                            ${tier.price}
                                                                        </div>
                                                                    </div>

                                                                </>
                                                            ) :
                                                            <Priceview local={tier.name} price={tier.price} />
                                                    }
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex md:mx-16 md:w-1 md:bg-primary-400" />
                            <div className="md:flex md:flex-col md:flex-1">
                                <div>
                                    <h2 className="font-bold text-xl my-5 md:text-4xl">
                                        Seleccionar localidad:
                                    </h2>
                                    <div className=' grid grid-cols-2  gap-7  justify-items-center '>
                                        {
                                            event.tiers?.map(card =>
                                                card.capacity === 0 ?
                                                    (
                                                        null
                                                    ) :
                                                    <div key={card.id} onClick={() => { selectedItem(card); setActive(card?.name) }} className={`rounded-md w-[7rem] lg:w-[10rem] text-center p-2 font-semibold hover:cursor-pointer   ${active === card?.name ? "text-primary-400 bg-secondary" : "bg-primary-400 text-secondary hover:bg-yellow-800"} `} >
                                                        {card?.name}
                                                    </div>



                                            )}
                                    </div>
                                    {
                                        active ?
                                            <div className=" p-5 flex justify-center md:text-lg">
                                                <div className="bg-primary-400 font-bold rounded my-3 flex">
                                                    <button className="px-2 py-1 justify-center items-center hover:bg-yellow-800 hover:rounded" onClick={countDecrement}>
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <div className="px-1 py-1 flex justify-center items-center content-center w-5">
                                                        {count}
                                                    </div>
                                                    <button className="px-2 py-1 justify-center items-center hover:bg-yellow-800 hover:rounded" onClick={countIncrement}>
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </div>

                                <div>
                                    <h2 className="font-bold my-3 text-xl md:text-4xl">
                                        Resumen:
                                    </h2>
                                    <div className="md:flex md:justify-center">
                                        <div className="bg-secondary rounded text-white px-3 py-1 my-2 text-lg md:w-5/6 ">
                                            <h2 className="font-bold my-2">
                                                {event.title}
                                            </h2>
                                            <div className="bg-primary h-0.5 my-2" />
                                            <div className="flex flex-col ml-5 justify-start">
                                                <div className="flex flex-row mt-1">
                                                    <div className="font-bold mx-2">
                                                        Localidad:
                                                    </div>
                                                    <div>
                                                        {tier.name}
                                                    </div>
                                                </div>

                                                <div className="flex flex-row mt-1">
                                                    <div className="font-bold mx-2">
                                                        Cantidad:
                                                    </div>
                                                    {count}
                                                    <div>

                                                    </div>
                                                </div>

                                                <div className="flex flex-row justify-end items-center my-2 text-xl">
                                                    <div>
                                                        Total:
                                                    </div>
                                                    <h1 className="text-primary font-bold ml-2 text-2xl">
                                                        {total}


                                                    </h1>
                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                    {


                                        count == 0 || tier.length == 0 ?
                                            <div className="flex justify-center  ">
                                                <button className="bg-gray-200 text-gray-500 font-bold text-xl my-5 px-4 py-3 rounded hover:cursor-default " >
                                                    Procesar compra
                                                </button>
                                            </div>
                                            :
                                            <div className="flex justify-center  ">
                                                <button className="bg-primary-400 font-bold text-xl my-5 px-4 py-3 rounded hover:bg-yellow-800 " onClick={() => sendData()}>
                                                    Procesar compra
                                                </button>
                                            </div>

                                    }
                                </div>
                            </div>

                        </div>
                    )
                }
            </LayoutIndex>
        </>

    );
}


export default BuyTicket