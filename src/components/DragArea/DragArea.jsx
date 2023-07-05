import { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { toast } from 'react-toastify';

const DragArea = ({ setImg }) => {

    const getImage = (e) => {
        const reader = new FileReader();
        const image = new Image();

        if (e.target.files[0].type.split("/")[0] !== "image") {
            toast.error("Invalid type of file");
            return;
        }

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (e) => {
            e.preventDefault();
            image.src = e.target.result;

            image.onload = () => {
                // TODO: Validation of Image width and height 
                console.log(image.naturalWidth);
                console.log(image.naturalHeight);
            }

            setImg(e.target.result);
        }
    }

    return (
        <div className="w-full relative border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center gap-3 p-6 justify-center text-gray-500 font-medium hover:border-primary-400" >
            <input
                className="absolute m-0 p-0 w-full h-full outline-none cursor-pointer bg-black opacity-0"
                type="file"
                accept="image/*"
                onChange={e => getImage(e)}
            />
            <BsCloudUpload size={60} />
            <p className="text-center">Arrastra y suelta la imagen</p>
            <p className="text-center">o</p>
            <p className="text-center">Presiona en cualquier parte del recuadro</p>
        </div >
    )
}

export default DragArea