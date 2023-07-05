import Image from 'next/image'
import useAuth from '@/hooks/useAuth';
import SideItem from './SideItem';

const Sidebar = ({ hidden = true }) => {
    const { auth } = useAuth();

    return (
        <aside className={`${hidden ? "hidden" : "w-8/12 flex"} lg:w-1/5 xl:w-1/6 bg-secondary py-7 font-Montserrat lg:flex flex-col gap-7`}>

            <div className="flex justify-center items-center gap-5">
                <Image src={auth.avatar} width={50} height={50} className="rounded-full ring-2 ring-primary-400" alt="User Avatar" />
                <div className="flex flex-col font-bold text-white text-lg">
                    <p>Bienvenido</p>
                    <p>{auth.username}</p>
                </div>
            </div>

            <hr className="w-1/2 mx-auto border-[#4b4b4b]" />

            <div className="flex flex-col ">
                {
                    auth.privileges?.map(access => (
                        <SideItem
                            key={access.id}
                            privilege={access.privilege}
                        />
                    ))
                }
            </div>
        </aside>
    )
}
export default Sidebar