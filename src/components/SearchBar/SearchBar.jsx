import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import classNames from "classnames"
import useEvent from "@/hooks/useEvent"
import { useRouter } from "next/router";

const SearchBar = () => {
    const [src, setSrc] = useState("");
    const { searchBar, handleSearchBar, events } = useEvent();
    const router = useRouter();

    const filteredEvents = src === '' ? [] : events.filter(evt => evt.title?.toLowerCase().includes(src.toLowerCase()));

    return (
        <Transition.Root show={searchBar} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20" onClose={handleSearchBar}>
                <Transition.Child
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Combobox
                        as="div"
                        className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl transition-all font-Montserrat"
                        onChange={(event) => router.push(`/admin/events/${event.id}`)}
                    >
                        <div className="relative">
                            <Combobox.Input
                                className="h-12 w-full bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-500 sm:text-sm md:text-lg focus:outline-none"
                                placeholder="Search..."
                                onChange={e => setSrc(e.target.value)}
                            />
                        </div>

                        {filteredEvents.length > 0 && (
                            <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2  text-gray-800">
                                {filteredEvents.map(event => (
                                    <Combobox.Option
                                        key={event.id}
                                        value={event}
                                        className={({ active }) => classNames('cursor-pointer select-none px-4 py-2', active && 'bg-primary-400 text-black')}
                                    >
                                        {event.title}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}
                    </Combobox>
                </Transition.Child>
            </Dialog>
        </Transition.Root >
    )
}

export default SearchBar