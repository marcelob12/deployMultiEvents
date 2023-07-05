
import { Fragment, useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react";
import useEvent from "@/hooks/useEvent";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QrReaderComponent(props) {

    const [scanResult, setScanResult] = useState(null);


    useEffect(() => {

        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 100,
                height: 100
            },
            fps: 15,
            aspectRatio: 1.0,
            disableFlip: true,
            disableAutoScan: false,
      

        });


        const succes = (qrMessage) => {
            scanner.clear();
            setScanResult(qrMessage);

        }

        scanner.render(succes);
        
    }, []);
    
    const repeatScan = () => {
      props.onClick();
    }
    
    return (
        <div>
            <div className="bg-secondary py-11 w-[15rem] h-[17rem] md:w-[20rem] font-Saira font-medium text-white uppercase md:h-[20rem] text-center rounded-lg items-center flex flex-col justify-center gap-5">
                <h1 className="font-bold" >Escanea el Qr del ticket</h1>

                {
                    scanResult ? (
                        // <div> Escaneado: <a href={"http://" + scanResult}></a></div>
                        <>
                            <div className="bg-green h-[4rem]">

                                <div className="bg-primary-400"></div>
                                <p>  Escaneado: {scanResult} </p>
                                <button onClick={repeatScan}> Volver a escanear </button>
                            </div>
                        </>
                    ) :
                        
                        <div className="bg-secondary" id="reader"></div>
                   
                }

            </div>

        </div>
        // <Transition.Root show={QrReaderModal} as={Fragment}>
        //     <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleQrReaderModal}>
        //         <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 font-Montserrat">
        //             <Transition.Child
        //                 as={Fragment}
        //                 enter="ease-out duration-300"
        //                 enterFrom="opacity-0"
        //                 enterTo="opacity-100"
        //                 leave="ease-in duration-200"
        //                 leaveFrom="opacity-100"
        //                 leaveTo="opacity-0"
        //             >
        //                 <Dialog.Overlay
        //                     className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
        //                 />
        //             </Transition.Child>

        //             {/* This element is to trick the browser into centering the modal contents. */}
        //             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        //                 &#8203;
        //             </span>

        //             <Transition.Child
        //                 as={Fragment}
        //                 enter="ease-out duration-300"
        //                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        //                 enterTo="opacity-100 translate-y-0 sm:scale-100"
        //                 leave="ease-in duration-200"
        //                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        //                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        //             >
        //                 <div className="  bg-secondary h-[20rem] w-[20rem]  md:w-[25rem] inline-block align-top  rounded-xl text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full">


        //                     <div className=" bg-orange-500 flex items-center justify-center flex-col">


        //                         {
        //                             scanResult ? 
        //                             <div> Success: <a href={"http://" + scanResult}></a></div>
        //                                 : 
        //                             <div className="bg-secondary" id="reader"></div>
        //                         }

        //                     </div>


        //                 </div>
        //             </Transition.Child>
        //         </div>
        //     </Dialog>
        // </Transition.Root>
    )
}
