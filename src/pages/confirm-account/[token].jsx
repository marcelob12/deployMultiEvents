import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function Confirm() {
    const [confirmed, setConfirmed] = useState(false);
    const router = useRouter();
    const { token } = router.query;

    useEffect(() => {
        const confirm = async () => {

            if (token != undefined) {
                try {
                    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/confirm/${token}`);

                    toast.info(data.msg);

                    setConfirmed(true);
                } catch (error) {
                    toast.error(error.response.data.msg);
                }
            }
        }

        confirm();
    }, [token]);

    return (
        <div className="h-screen bg-index-img flex flex-col justify-center items-center gap-12">
            <div className="sm:w-4/5">
                <h1 className="text-5xl font-Saira font-black text-center">
                    Verifica el usuario para disfrutar de tus eventos favoritos
                </h1>
            </div>

            {confirmed && (

                <Link
                    href="/login"
                    className="w-48 py-3 font-Saira text-center uppercase text-lg font-bold bg-primary-400 rounded-lg hover:bg-primary-500"
                >
                    Iniciar Sesión
                </Link>
            )}
        </div>
    )
}
