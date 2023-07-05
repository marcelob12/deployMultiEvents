import useUser from "@/hooks/useUser";

const UserPreview = ({ user }) => {
    const { chargeUserData } = useUser();
    const { name, email } = user;

    return (
        <div className="w-full border-b p-5 font-Montserrat md:flex md:justify-between ">
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="flex gap-5 flex-col md:gap-0">
                    <span className="flex gap-2 font-medium">Email: <p className="font-normal">{email}</p></span>
                    <span className="flex gap-2 font-medium">Permisos:
                    </span>
                    <ul className="font-normal list-disc list-inside ">
                        {
                            user.accessList.map((access) => (
                                <li
                                    key={access.id}
                                    className="ml-4"
                                >
                                    {access.privilege.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="flex mt-4 justify-between items-center md:gap-6">
                <button
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm text-white uppercase font-bold rounded-lg w-5/12 md:w-auto"
                    onClick={() => chargeUserData(user)}
                >
                    Editar
                </button>
                <button
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm text-white uppercase font-bold rounded-lg w-5/12 md:w-auto"

                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default UserPreview