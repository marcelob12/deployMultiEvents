import LayoutAdmin from "@/components/LayoutsComponent/LayoutAdmin";
import QrReaderComponent from "@/components/QrReaderComponent/QrReaderComponent";
import useEvent from "@/hooks/useEvent";
import { useState } from "react";


const QrReader = () => {
    const { handleQrReaderModal } = useEvent();
    const Qr = "/img/qr.png"

    const [modalQR, setModalQR] = useState(false);

    const handleModalQR = () => {
        setModalQR(!modalQR);
    }

    return (
        <LayoutAdmin title="Lector de QR">
            <h1 className="text-3xl font-Montserrat font-extrabold">Lector de Qr</h1>

            <div className="m-auto p-auto flex flex-col lg:flex-row justify-center items-center h-screen gap-8 ">

                {
                    modalQR ?
                        <QrReaderComponent onClick={handleModalQR} />
                        :

                <div className="border-gray-600 border-2 border-dashed py-11 w-[15rem] h-[17rem] md:w-[20rem] md:h-[20rem] rounded-lg text-center items-center flex flex-col justify-center gap-5">
                    <img src={Qr} alt="" className='w-[5rem] pt-5' />

                    <button className='border-primary-400 border-2 px-5 font-semibold rounded-md text-gray-600'>Buscar imagen</button>
                    <p>o</p>
                    <button className='border-primary-400 border-2 px-5 font-semibold rounded-md text-gray-600' onClick={handleModalQR}>Abrir cámara</button>

                </div>

                }


                <div className="bg-secondary py-11 w-[15rem] h-[17rem] md:w-[20rem] font-Saira font-medium text-white uppercase md:h-[20rem] text-center rounded-lg items-center flex flex-col justify-center gap-5">
                    <h1 className="font-bold" >Bob Marley - El Salvador</h1>
                    <p >#Orden-45655</p>
                    <p >Estado: Por Escanear</p>
                    <button className="bg-primary-400 text-secondary px-4 py-2 font-semibold rounded-lg">Canjear Ticket</button>
                </div>

            </div>



        </LayoutAdmin>
    )
}


export default QrReader