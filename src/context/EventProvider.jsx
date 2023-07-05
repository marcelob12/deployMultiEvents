import axios from 'axios';
import { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const EventContext = createContext();

const EventProvider = ({ children }) => {
    const [modalTier, setModalTier] = useState(false);
    const [modalTicket, setModalTicket] = useState(false);
    const [modalDelTier, setModalDelTier] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [event, setEvent] = useState({});
    const [tier, setTier] = useState({});
    const [loading, setLoading] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [shareTicketModal, setShareTicketModal] = useState(false);
    const [QrReaderModal, setQrReaderModal] = useState(false);

    // Handle for Modals
    const handleModalTier = () => {
        setModalTier(!modalTier);
        setTier({});
    }

    const handleEditModalTier = (tier) => {
        setTier(tier);
        setModalTier(!modalTier);
    }

    const handleMDelTier = (tier) => {
        setTier(tier);
        setModalDelTier(!modalDelTier);

    }

    const handleSearchBar = () => {
        setSearchBar(!searchBar);
    }

    const handleShareTicketModal = () => {
        setShareTicketModal(!shareTicketModal);
    }

    const handleModalTicket = () => {
        setModalTicket(!modalTicket);

    }

    // Events Functions
    const getAllEvents = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/event/all`, config);
            setEvents(data);

        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const getEvent = async (id) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/event/${id}`, config);
            setEvent(data);


        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const createEvent = async (body) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`, body, config);
            toast.success(data.msg)

        } catch (error) {
            throw error;
        }
    }

    const getCategories = async () => {
        const response = await fetch("/data/categories.json");
        const result = await response.json();

        setCategories(result);
    }

    // Ticket Functions
    const getAllTickets = async () => {
        const response = await fetch("/data/tickets.json");
        const result = await response.json();


    }

    const handleQrReaderModal = () => {
        setQrReaderModal(!QrReaderModal);

    }

    // Tier Functions

    const updateTier = async (body) => {

        try {

            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/tier/updateTier/`, body, config);

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const createTier = async (body) => {

        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/tier/`, body, config);



        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const deleteTier = async (body) => {
        try {

            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/tier/deleteById/`, body, config);

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    // function order

    const createOrder = async (body, tier) => {

        console.log("tier", tier);
        try {

            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/order/`, body, config);


            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/all/${body.identifier}`, config);
            console.log("data", data[data.length - 1]);



            try {
                await updateTier({
                    id: tier.id,
                    capacity: tier.capacity - body.count,
                    price: tier.price
                });
            } catch (error) {
                console.log(error);
                throw error;
            } finally {
                console.log("tier", tier);
            }

            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/`, {
                "tier": tier.id,
                "order": data[data.length - 1].id
            }, config);




        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }


    // Fucntion Ticket
    const getTickets = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/my-tickets`, config);

            setTickets(data);


        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }


    return (
        <EventContext.Provider
            value={{
                modalTier,
                handleModalTier,
                modalDelTier,
                handleMDelTier,
                searchBar,
                handleSearchBar,
                modalTicket,
                handleModalTicket,
                tier,
                handleEditModalTier,
                getAllEvents,
                events,
                tickets,
                getAllTickets,
                getEvent,
                event,
                setLoading,
                shareTicketModal,
                handleShareTicketModal,
                categories,
                getCategories,
                QrReaderModal,
                handleQrReaderModal,
                loading,
                createEvent,
                createTier,
                updateTier,
                deleteTier,
                createOrder,
                getTickets
            }}
        >
            {children}
        </EventContext.Provider>
    )
}

export {
    EventProvider
}

export default EventContext 