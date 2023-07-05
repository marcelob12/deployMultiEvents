import { useEffect } from "react";
import EventPreview from "@/components/EventPreview/EventPreview";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import useEvent from "@/hooks/useEvent";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";
import LayoutAdmin from "@/components/LayoutsComponent/LayoutAdmin";
import Spinner from "@/components/Spinner/Spinner";

export default function Events() {
    const { handleSearchBar, events, getAllEvents, loading } = useEvent();

    useEffect(() => {
        getAllEvents();
    }, [])

    return (
        <>
            <LayoutAdmin title="Eventos">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-Montserrat font-extrabold">Eventos</h1>
                    <div className="flex gap-3 font-Montserrat">
                        <button className="flex gap-3 px-3 py-1 text-black font-bold bg-primary-400 uppercase rounded-lg hover:bg-opacity-90 mt-5 transition-all" onClick={handleSearchBar}>
                            <AiOutlineSearch size={25} />
                            Buscar
                        </button>
                        <Link
                            href="/admin/events/new"
                            className="flex gap-3 px-3 py-1 text-black font-bold bg-primary-400 uppercase rounded-lg hover:bg-opacity-90 mt-5 transition-all"
                        >
                            <IoMdAddCircle size={25} />
                            Nuevo
                        </Link>
                    </div>
                </div>

                {
                    loading ? <Spinner />
                        :
                        <div className="bg-white shadow rounded-lg">
                            {
                                events.length ?
                                    events.map((event) => (
                                        <EventPreview
                                            key={event.id}
                                            event={event}
                                        />
                                    ))

                                    :

                                    <p className="text-center text-gray-700 font-bold uppercase p-5">No hay eventos</p>
                            }
                        </div>
                }

                <SearchBar />
            </LayoutAdmin >
        </>
    )
}
