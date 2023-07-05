import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react";
import useEvent from "@/hooks/useEvent";
import { IoIosArrowBack } from "react-icons/io";

const ShareModal = () => {
    const { shareTicketModal, handleShareTicketModal } = useEvent();
    const [name, setName] = useState("");

    return (
        <Transition.Root show={shareTicketModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleShareTicketModal}>
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
                        <div className=" relative bg-secondary h-[20rem] w-[20rem]  md:w-[25rem] inline-block align-top  rounded-xl text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full">


                            <div className="font-Montserrat text-center p-5">
                                <IoIosArrowBack className='text-primary-400 absolute top-4 left-3 hover:cursor-pointer mb-5' size={30} onClick={handleShareTicketModal} />
                                <form className="my-10 flex flex-col gap-5" onSubmit={() => console.log("BUM")}>
                                    <p className="font-semibold text-primary-400">Digite el correo de la persona a la que le enviara el código QR</p>
                                    <div className="text-start text-primary-400">
                                        <label htmlFor="name" className=" font-bold uppercase text-sm">Email:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="user@gmail.com"
                                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        className="bg-primary-400 hover:bg-primary-500 text-black font-bold uppercase w-full rounded cursor-pointer mt-3 p-3 text-sm transition-colors"
                                        value="Guardar"
                                    />


                                </form>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ShareModal