import Image from "next/image"

const Avatar = ({ isActive }) => {
    return (
        <div className={`${isActive ? "hidden" : "grid"} absolute bg-white rounded-lg grid-rows-3 grid-cols-3 w-40 top-40 z-10 left-[20%] sm:left-[60%] gap-2 items-center justify-items-center p-2 shadow-lg `}>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
            <Image src="/img/zeus.png" width={50} height={50} className="hover:scale-105 cursor-pointer"/>
        </div >
    )
}

export default Avatar