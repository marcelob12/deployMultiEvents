import Link from "next/link"
import { HiChartPie, HiTrash } from 'react-icons/hi'

const EventPreview = ({ event }) => {
    
    return (
        <div className="border-b p-5 flex flex-row justify-between items-center font-Montserrat">

            <div className="block">
                <p className="flex flex-col sm:flex-row sm:gap-2 items-center font-bold text-lg">
                    {event.title}
                    <span className="font-medium text-sm text-gray-500 uppercase"> {''} {event.category.name}</span>
                </p>

                <Link
                    href={`/admin/events/${event.id}`}
                    className="text-sm text-gray-700 hover:text-black font-bold uppercase"
                >
                    Ver Evento
                </Link>
            </div>

            <Link href="/admin/events/statistics" className="flex gap-4 items-center">
                <HiChartPie
                    size={25}
                    className="text-green hover:cursor-pointer hover:scale-110"
                    
                />

                <HiTrash
                    size={25}
                    className="text-red-600 hover:cursor-pointer hover:scale-110"
                />
            </Link>
        </div>
    )
}

export default EventPreview