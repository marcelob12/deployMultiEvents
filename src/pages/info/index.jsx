import React from 'react'
import LayoutIndex from '@/components/LayoutsComponent/LayoutIndex'
import Image from 'next/image';


const Info = () => {
    const Logo = require('/public/img/MultiEvents.jpg');
    return (
        <LayoutIndex title="Info">
            <div className="font-Saira flex flex-col mx-8 my-4 md:mx-80 md:my-20">
                <div className="flex justify-center items-center mb-3">
                    <Image src={Logo} alt="Logo" />
                </div>
                <h1 className="text-lg font-bold flex justify-center items-center my-4">
                    Necesitas ayuda?
                </h1>
                <div className="flex flex-col justify-center text-justify my-4">
                    <ol className="list-decimal">
                        <li className="text-lg ">
                            Dificultades técnicas
                        </li>
                        Si está experimentando dificultades técnicas se recomienda tratar las siguientes soluciones:
                        <ul className="list-disc mb-3">
                            <li>Limpiar el caché y cookies del buscador.</li>
                            <li>Asegurarse que su buscador esté actualizado.</li>
                            <li>Deshabilitar extensiones y plugins que puedan causar conflictos.</li>
                            <li>Si los problemas persisten, por favor contactar nuestro equipo de suporte técnico.</li>
                        </ul>
                        <li className="text-lg ">
                            Sobre código QR
                        </li>
                        Para poder participar en los eventos, se deberá de canjear su ticket.
                        Para esto se debe de canjear el código QR,
                        usted tendrá 10 minutos para que este sea validado por uno de nuestros empleados.
                        El código será válido únicamente durante 10 minutos,
                        si este no fue validado durante este tiempo se deberá generar nuevamente el código QR,
                        esto es con el fin de proteger sus tickets y evitar inconvenientes al momento de asistir a los eventos.
                    </ol>
                </div>
            </div>
        </LayoutIndex>
    )
};

export default Info