import { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react";
import { Checkbox } from "@material-tailwind/react";
import useUser from "@/hooks/useUser";

const ModalModUser = () => {
    const { modalModUser, handleModalModUser, user, privileges, getPrivileges } = useUser();
    const [name, setName] = useState("");
    const [userPermissions, setUserPermissions] = useState([]);

    useEffect(() => {
        getPrivileges();
    }, [])

    useEffect(() => {
        if (user?.username) {
            setName(user.username);
            setUserPermissions(user.accessList);
        }
    }, [user])


    const handlePermissions = (p) => {
        if (userPermissions.includes(p)) {
            const updatedUserPermissions = userPermissions.filter((per) => per !== p);
            setUserPermissions(updatedUserPermissions);
            return;
        }

        setUserPermissions([...userPermissions, p]);
    }

    const check = (permission) => {
        userPermissions.map((up) => {
            if (up.privilege.name == permission.name) {
                console.log(up.privilege.name);
                return true;
            }
        })
    }

    return (
        <Transition.Root show={modalModUser} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalModUser}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg 1 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">


                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleModalModUser}
                                >
                                    <span className="sr-only">Cerrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-extrabold text-gray-900 font-Montserrat">
                                        Guardar cambios
                                    </Dialog.Title>

                                    <form className="my-10" onSubmit={() => console.log("BUM")}>


                                        <div className="mb-5">
                                            <label htmlFor="name" className="text-gray-700 font-bold uppercase text-sm">Nombre:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Nombre del usuario"
                                                className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-3 relative">
                                            <label htmlFor="capacity" className="text-gray-700 font-bold uppercase text-sm">Permisos:</label>
                                            <div className="grid grid-cols-2 grid-rows-2 font-Montserrat">
                                                {
                                                    privileges?.length ?
                                                        privileges.map((permission) => (
                                                            <div className="flex gap-2 items-center" key={permission.idPrivilege}>
                                                                <Checkbox
                                                                    id={permission.idPrivilege}
                                                                    onChange={() => handlePermissions(permission.name)}
                                                                    checked={userPermissions.some(obj => Object.values(obj.privilege).includes(permission.name))}
                                                                />
                                                                <p>{permission.name}</p>
                                                            </div>
                                                        ))
                                                        :
                                                        <p className="text-center text-gray-700 font-bold uppercase p-5">No hay ermisos</p>

                                                }



                                                {/* <div className="flex gap-2 items-center">
                                                    <Checkbox onChange={() => handlePermissions(1)} />
                                                    <p>Permiso 1</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <Checkbox onChange={() => handlePermissions(2)} />
                                                    <p>Permiso 2</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <Checkbox onChange={() => handlePermissions(3)} />
                                                    <p>Permiso 3</p>
                                                </div> */}
                                            </div>
                                        </div>


                                        <input
                                            type="submit"
                                            className="bg-primary-400 hover:bg-primary-500 text-black font-bold uppercase w-full rounded cursor-pointer mt-3 p-3 text-sm transition-colors"
                                            value="Guardar"
                                        />


                                    </form>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalModUser