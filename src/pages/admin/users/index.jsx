import LayoutAdmin from "@/components/LayoutsComponent/LayoutAdmin";
import { AiOutlineSearch } from "react-icons/ai";
import ModalModUser from "@/components/ModalsComponents/ModalModUser";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";
import UserPreview from "@/components/UserPreview/UserPreview";
import Spinner from "@/components/Spinner/Spinner";

export default function Users() {
    const { users, getUsers, loading } = useUser();

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <LayoutAdmin title="Usuarios">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-Montserrat font-extrabold">Usuarios</h1>
                <div className="flex gap-3 font-Montserrat">
                    <button className="flex gap-3 px-3 py-1 text-black font-bold bg-primary-400 uppercase rounded-lg hover:bg-opacity-90 mt-5 transition-all" >
                        <AiOutlineSearch size={25} />
                        Buscar
                    </button>
                </div>
            </div>
            {
                loading ?
                    <Spinner />
                    :
                    <div className="bg-white shadow mt-10 rounded-lg">
                        {
                            users.length ?
                                users.map((user) => (
                                    <UserPreview
                                        key={user.email}
                                        user={user}
                                    />
                                ))
                                : <p className="text-center text-gray-700 font-bold uppercase p-5">No hay usuarios</p>

                        }
                    </div>
            }

            <ModalModUser />
        </LayoutAdmin>
    )
}
