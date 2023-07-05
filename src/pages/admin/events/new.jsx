import { useEffect, useState } from 'react'
import LayoutAdmin from '@/components/LayoutsComponent/LayoutAdmin'
import useEvent from '@/hooks/useEvent';
import DragArea from '@/components/DragArea/DragArea';
import Image from 'next/image';
import { BsCardImage } from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function NewEvent() {
    const { getCategories, categories, event, submitEvent } = useEvent();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [img, setImg] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        getCategories();


        if (event?.id) {
            const d = event.date.split(':');
            const dF = event.dateEnd.split(':');

            setName(event.title);
            setLocation(event.location);
            setCategory(event.category.name);
            setStartDate(`${d[0]}:${d[1]}`);
            setEndDate(`${dF[0]}:${dF[1]}`);
            setImg(event.image);
            return;
        }

        setName("");
        setCategory("");
        setLocation("");
        setImg("");
        setImgUrl("");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const today = new Date();
        // console.log(today);
        if ([name, location, category, startDate, startDate, endDate].includes("")) {
            toast.error("All fields are required");
            return;
        }

        const sDate = new Date(startDate);
        const eDate = new Date(endDate);

        if (sDate < today || eDate < today) {
            toast.error("Invalid dates");
            return;
        }

        if (sDate > eDate) {
            toast.error("Start date must be greater than end date");
            return;
        }

        const url = await uploadImage();

        const eventBody = {
            title: name,
            date: startDate,
            dateEnd: endDate,
            image: url,
            location: location,
            category: category
        }

        submitEvent(eventBody);

        setName("");
        setCategory("");
        setLocation("");
        setImg("");
        setStartDate("");
        setEndDate("");
        setImgUrl("");
    }

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "f06zewwl");

        try {
            const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD}/upload`, formData);
            return data.secure_url;
        } catch (error) {
            throw error;
        }
    }


    return (
        <LayoutAdmin title="Nuevo Evento">
            <div className="flex justify-between" >
                <h1 className="text-3xl font-Montserrat font-extrabold">{event?.title ? "Cambiar datos de evento" : "Guardar evento nuevo"}</h1>
            </div>
            <form
                className="mx-auto bg-white shadow mt-10 rounded-lg flex flex-col p-10 md:w-3/4 lg:w-7/12 font-Montserrat"
                onSubmit={e => handleSubmit(e)}
            >
                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600" htmlFor="name">Nombre:</label>
                    <input
                        id="name"
                        className="border-[1.5px] border-gray-400 rounded-xl h-10 px-2 focus:outline-primary-400"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nobre del evento"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600" htmlFor="category">Categoría:</label>
                    <select
                        id="category"
                        className="border-[1.5px] border-gray-400 rounded-xl h-10 px-2 focus:outline-primary-400"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="" disabled>-- Seleccione la categoría --</option>
                        {
                            categories.map(option => (
                                <option key={option.id} value={option.name}>{option.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600" htmlFor="location">Ubicación:</label>
                    <input
                        id="location"
                        className="border-[1.5px] border-gray-400 rounded-xl h-10 px-2 focus:outline-primary-400"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Ubicación del evento"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600" htmlFor="startDate">Fecha de inicio:</label>
                    <input
                        id="startDate"
                        className="border-[1.5px] border-gray-400 rounded-xl h-10 px-2 focus:outline-primary-400"
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600" htmlFor="initDate">Fecha de finalización:</label>
                    <input
                        id="initDate"
                        className="border-[1.5px] border-gray-400 rounded-xl h-10 px-2 focus:outline-primary-400"
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>



                <div className="flex flex-col gap-2 mb-7">
                    <label className="uppercase font-bold text-gray-600">Imagen:</label>

                    <div className="flex flex-col gap-4">
                        <DragArea
                            setImg={setImg}
                        />
                        <div className="w-full">
                            {
                                img ?
                                    <Image src={img} width={300} height={300} alt="Event image preview" />
                                    :
                                    <div className="text-gray-500 flex flex-col items-center justify-center rounded border border-gray-300 h-full p-6">
                                        <BsCardImage size={60} />
                                        <p className="font-bold text-gray-500 text-center">No se ha seleccionado ninguna imagen</p>
                                    </div>
                            }
                        </div>

                    </div>
                </div>

                <input
                    type="submit"
                    className="w-full bg-primary-400 cursor-pointer uppercase font-extrabold font-Montserrat py-3 rounded-lg hover:bg-primary-500"
                    value="Guardar Evento"
                />
            </form>
        </LayoutAdmin >
    )
}
