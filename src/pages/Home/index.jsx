import LayoutIndex from '@/components/LayoutsComponent/LayoutIndex'
import Image from 'next/image'
import Carrousel from '@/components/Carrousel/Carrousel'
import CardEvent from '@/components/CardEvent/CardEvent'
import { useState, useEffect } from 'react'
import useEvent from '@/hooks/useEvent'
import Spinner from '@/components/Spinner/Spinner'


export default function Home() {
	const { events, getAllEvents, loading } = useEvent();
	const [colors, setColors] = useState(['primary-400', 'card1', 'card2', 'card3']);

	useEffect(() => {
		getAllEvents();
	}, []);

	return (
		<>
			<LayoutIndex title="Home">
				<div className='bg-primary-400 w-full h-[380px]'>
					<Carrousel events={events} />
				</div>

				{/* contenedor de categorias */}
				<h2 className='pt-20 pb-8 font-Montserrat font-bold text-3xl text-center'>Categorías</h2>
				<div className="w-[88%] mx-auto">
					<div className="grid justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">

						<button className="w-full relative hover:scale-105 ease-in duration-150">
							<Image src="/img/sports.jpg" width={0} height={0} sizes="100%" className="w-full h-full" alt="Category Image" />
							<div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex justify-center items-center">
								<h3 className="font-Saira uppercase text-white font-bold text-4xl">Deportes</h3>
							</div>
						</button>
						<button className="w-full relative hover:scale-105 ease-in duration-150">
							<Image src="/img/art.jpg" width={0} height={0} sizes="100%" className="w-full h-full" alt="Category Image" />
							<div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex justify-center items-center">
								<h3 className="font-Saira uppercase text-white font-bold text-4xl">Arte</h3>
							</div>
						</button>
						<button className="w-full relative hover:scale-105 ease-in duration-150">
							<Image src="/img/concert.jpg" width={0} height={0} sizes="100%" className="w-full h-full" alt="Category Image" />
							<div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex justify-center items-center">
								<h3 className="font-Saira uppercase text-white font-bold text-4xl">Conciertos</h3>
							</div>
						</button>
						<button className="w-full relative hover:scale-105 ease-in duration-150">
							<Image src="/img/fun.jpg" width={0} height={0} sizes="100%" className="w-full h-full" alt="Category Image" />
							<div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex justify-center items-center">
								<h3 className="font-Saira uppercase text-white font-bold text-4xl">Diversión</h3>
							</div>
						</button>
					</div>
					{/* <h1 className='pt-14 pb-5 font-Montserrat font-bold text-2xl'>Eventos</h1> */}
				</div>

				{/* contenedor de tarjetas de eventos*/}

				<h2 className='pt-20 pb-8 font-Montserrat font-bold text-3xl text-center'>Eventos</h2>


				{
					loading ?
						<Spinner />
						:

						<div className="w-[88%] mx-auto flex flex-col gap-6 justify-center items-center md:grid lg:grid-cols-4 md:grid-cols-2 md:place-items-center mb-9">
							{
								events?.length ?
									events.map((event, index) => (

										<CardEvent
											id={event.id}
											color={colors[((index + 4 - 4) % 4)]}
											image={event.image}
											title={event.title}
											description={event.description}
											date={event.date}
											place={event.location}
										/>
									))

									:

									<div className='text-center col-span-4 items-center w-full h-[15rem] place-items-center flex justify-center px-5'>
										{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#febc14" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,96C672,96,768,160,864,181.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>						 */}
										<p className='text-lg font-Saira font-semibold'>
											No hay eventos disponibles, vuelve Pronto
										</p>
										<div>
											<iframe src="https://embed.lottiefiles.com/animation/9103"></iframe>
										</div>
										{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#febc14" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,96C672,96,768,160,864,181.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
									</div>




							}


						</div>
				}


			</LayoutIndex>
		</>
	)
}
