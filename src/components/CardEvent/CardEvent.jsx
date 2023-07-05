import { BiMap } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import Link from 'next/link'
import { data } from '@/pages/admin/events/statistics'

const CardComponent = ({ id, image, title, description, date, place, color }) => {
	date = new Date(date).toLocaleDateString()

	return (
		<>
			<p className="hidden text-card1 bg-card1">Prueba</p>
			<p className="hidden text-card2 bg-card2">Prueba</p>
			<p className="hidden text-card3 bg-card3">Prueba</p>
			<div className='bg-secondary flex flex-col items-center justify-between w-[18rem] h-[29rem] text-center rounded-2xl shadow-lg'>
				<div className='w-full h-[40%] rounded-t-xl bg-cover bg-center' style={{ backgroundImage: `url(${image}` }} />
				<div className="flex flex-col justify-between w-full h-[48%] p-4 font-Montserrat">
					<h2 className={`text-${color} text-xl font-semibold`}>{title}</h2>
					<p className='text-white font-Saira line-clamp-3'>{description}</p>
					<div className="flex justify-end">
						<Link href={`/buy-ticket/${id}`} className={`text-${color} font-semibold text-sm underline hover:scale-105`}>Ver detalles</Link>
					</div>
				</div>
				<div className={`bg-${color} flex h-[12%] w-full rounded-b-2xl text-center items-center justify-around font-Saira`}>
					<div className='flex justify-center text-center items-center'>
						<BiMap size={22} /><p className='font-semibold'>{place}</p>
					</div>
					<div className='flex justify-center text-center items-center'>
						<AiOutlineCalendar size={22} /> <p className='font-semibold'>{date}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardComponent
