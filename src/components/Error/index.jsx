import Link from "next/link"
import { AiOutlineLock } from "react-icons/ai"

const Error = ({ title, description }) => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
            <div className="w-auto rounded-full p-3 bg-primary-400">
                <AiOutlineLock size={90} />
            </div>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="font-Saira text-5xl">{title}</h1>
                <p className="font-Saira text-2xl text-gray-400 font-thin">{description}</p>
            </div>
            <Link href='/login'>
                <button className="flex justify-center items-center w-52 h-12 font-Saira text-lg font-bold uppercase bg-primary-400 rounded-lg hover:cursor-pointer hover:bg-primary-500 transition-colors duration-300">
                    Iniciar Sesión
                </button>
            </Link>
        </div>
    )
}

export default Error