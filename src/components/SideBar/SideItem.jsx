import Link from "next/link";
import { HiViewGrid, HiOutlineUserGroup, HiQrcode, HiHome } from 'react-icons/hi'
import { useRouter } from "next/router";

const SideItem = ({ privilege }) => {
    const router = useRouter();
 

    return (
        <Link
            href={`${privilege.route}`}
            className={`${router.pathname.split('/')[2] == privilege.route.split('/')[2] ? "bg-primary-400 text-black" : "bg-secondary text-white"} flex gap-2 p-3 font-extrabold items-center hover:text-black hover:bg-primary-400`}
        >
            {
                privilege.name == "Client" && <HiHome size={20} />
            }
            {
                privilege.name == "Events management" && <HiViewGrid size={20} />
            }
            {
                privilege.name == "Users management" && <HiOutlineUserGroup size={20} />
            }
            {
                privilege.name == "QR reader" && <HiQrcode size={20} />
            }
            {
                privilege.name == "Client" ?
                    "Home"
                    :
                    privilege.name
            }
        </Link>
    )
}

export default SideItem