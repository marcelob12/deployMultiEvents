import { Fragment } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Dialog, Transition } from '@headlessui/react';
import useEvent from '@/hooks/useEvent';
import QRCode from '@/components/QrCode/QrCode';


const ModalTicket = ({ title, time, tier, date, image }) => {
    const { handleModalTicket, modalTicket, qrCode } = useEvent();


    return (
        <>
            <Transition.Root show={modalTicket} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalTicket}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 font-Montserrat">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className=" relative bg-secondary h-[32rem] w-[20rem]  md:w-[25rem] inline-block align-top  rounded-xl text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full">

                                <div className='flex flex-col justify-center items-center font-Montserrat font-semibold  h-full'>

                                    <div className='bg-white flex flex-col justify-between text-secondary text-center items-center rounded-3xl relative h-full'>
                                        <IoIosArrowBack className='text-primary-400 absolute top-4 left-3 hover:cursor-pointer' size={30} onClick={handleModalTicket} />
                                        <div className=' w-full rounded-t-xl h-[15rem]  bg-cover py-5' style={{ backgroundImage: `url(${image}` }}>
                                        </div>

                                        <div className='w-full text-start px-5 flex items-center'>
                                            <p className='place-items-start'>{time}</p>
                                        </div>

                                        <p className='py-3 text-xl'>{title}</p>

                                        <div className='text-white h-[8rem] w-[6rem] flex items-center justify-center '>
                                            {
                                                qrCode.qr &&
                                                <div className='bg-white w-32 p-1 rounded-lg mt-4 mb-2'>
                                                    <QRCode value={qrCode.qr} size={120} />
                                                </div>
                                            }

                                        </div>
                                        <p className='p-2'> {tier} {date} {time}</p>
                                        <div className='bg-primary-400 rounded-b-xl w-full font-light text-xs p-2 h-[5rem]'>
                                            Recuerda que debes presentar este ticket en la entrada del evento para que un encargado pueda checkear su validez, tampoco olvides que no debes compartir este código
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default ModalTicket