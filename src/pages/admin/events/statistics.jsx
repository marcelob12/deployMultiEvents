import LayoutAdmin from '@/components/LayoutsComponent/LayoutAdmin'
import {
    ButtonGroup,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Vip', 'General', 'Platinum', 'Palco'],
    datasets: [
        {
            label: 'Venta de evento',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#febc14',
                '#5c7bd9',
                '#ee6666',
                '#00a896',
                '#49e541',
                '#bd327c',
            ]
        },
    ],
};
export const data2 = {
    labels: ['Tickets vendidos', 'Tickets Canjeados'],
    datasets: [
        {
            label: 'Venta de evento',
            data: [50, 10],
            backgroundColor: [
                '#febc14',
                '#5c7bd9',
            ]
        },
    ],
};

const EventStatics = () => {

    // mostrar diferentes tipod e graficas 

    const [graphics, setGraphics] = useState(1);
          

    return (
        <LayoutAdmin title="Estadisticas">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-xl md:text-3xl font-Montserrat font-extrabold">Estadisticas </h1>
                <div className="flex gap-3">
                    <button className="md:gap-3 px-2 py-1 text-black font-bold bg-primary-400  rounded-lg hover:bg-opacity-90 mt-5">
                        Generar Excel
                    </button>
                    <button className="md:gap-3 px-2 py-1 text-black font-bold bg-primary-400  rounded-lg hover:bg-opacity-90 mt-5">
                        Generar PDF
                    </button>
                </div>
            </div>


            <div className="bg-white shadow mt-10 rounded-lg flex flex-col p-10">
                <div>
                    <h1 className='font-bold text-lg'>Evento: <span>Metallica</span></h1>
                </div>

                <div className='md:hidden lg:hidden' >
                    <Menu >
                        <MenuHandler color={'amber'}>
                            <Button>Estadisticas</Button>
                        </MenuHandler>
                        <MenuList className='md:hidden'>
                            <MenuItem onClick={()=>setGraphics(1)}>Localidades más vendidas</MenuItem>
                            <MenuItem onClick={()=>setGraphics(2)}>Tickets Vendidos / Tickets Canjeados</MenuItem>
                            <MenuItem onClick={()=>setGraphics(3)}>Asistencia al evento</MenuItem>
                            <MenuItem onClick={()=>setGraphics(4)}>Tipos de visita</MenuItem>

                        </MenuList>
                    </Menu>
                </div>

                <div className=" flex-col w-auto gap-4 hidden md:block">
                    <ButtonGroup color={'amber'} >
                        <Button onClick={()=>setGraphics(1)}>Localidades más vendidas</Button>
                        <Button onClick={()=>setGraphics(2)}>Tickets Vendidos / Tickets Canjeados</Button>
                        <Button onClick={()=>setGraphics(3)}>Asistencia al evento</Button>
                        <Button onClick={()=>setGraphics(4)}>Tipos de visita</Button>
                    </ButtonGroup>
                </div>
                
                {
                    graphics === 1 ? (
                <div className='border-2 border-primary mt-5'>
                    <p className='font-bold p-5'>Localidades mas vendidas:</p>

                    <div className='h-[15rem] md:h-[25rem] p-3 mt-3 flex justify-center '>
                        <Doughnut className='h-screen' data={data} />
                    </div>
                </div>
                    ) : graphics === 2 ? (
                        <div className='border-2 border-primary mt-5'>
                        <p className='font-bold p-5'>Tickets Vendidos / Tickets Canjeados</p>
    
                        <div className='h-[15rem] md:h-[25rem] p-3 mt-3 flex justify-center '>
                            <Doughnut className='h-screen' data={data2} />
                        </div>
                    </div>
                        ) 
                    : null
                }


            </div>

        </LayoutAdmin>
    )
}

export default EventStatics;