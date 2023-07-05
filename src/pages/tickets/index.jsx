import React, { useEffect, useState } from 'react'
import LayoutIndex from '@/components/LayoutsComponent/LayoutIndex'
import Ticket from '@/components/Ticket/Ticket'
import useEvent from '@/hooks/useEvent'
import ModalTicket from '@/components/ModalsComponents/ModalTicket'
import ShareTicketModal from '@/components/ModalsComponents/ShareTicketModal'

const Tickets = () => {
	const [qrInfo, setQrInfo] = useState({});
	const { tickets, getTickets } = useEvent();


	useEffect(() => {
		getTickets();
		console.log(tickets);

	}, []);


	useEffect(() => {
		console.log(qrInfo.title);
	}, [qrInfo]);


	return (
		<LayoutIndex title="Tickets">
			<div className="py-4 w-full flex justify-center flex-col gap-5 items-center">
				<h1 className="text-3xl font-Monserrat font-bold py-4">Tickets</h1>
				{
					tickets.length ?
						tickets.map(ticket => (
							ticket.tickets.map(t => (
								<Ticket
									key={t.id}
									info={t}
									setQrInfo={setQrInfo}
								/>
							))
						))
						:
						null
				}
			</div>
			<ModalTicket
				title={qrInfo.title}
				time={qrInfo.time}
				tier={qrInfo.tier}
				date={qrInfo.date}
				image={qrInfo.image}
			/>
			<ShareTicketModal />
		</LayoutIndex>
	)
}

export default Tickets