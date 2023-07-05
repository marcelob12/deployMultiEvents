import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SideBar/Sidebar'
import useAuth from '@/hooks/useAuth'
import Error from '../Error'
import Spinner from '../Spinner/Spinner'

const LayoutAdmin = ({ children, title = "Default" }) => {
    const { auth, loading } = useAuth();

    if (loading)
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner />
            </div>
        );

    return (
        <>
            {
                auth.username  ?
                    <>
                        <Head>
                            <title>{`MultiEvents | ${title}`}</title>
                        </Head>

                        <Navbar isAdmin={true} />

                        <div className="lg:flex bg-[#f3f4f6] min-h-screen">
                            <Sidebar />
                            <main className="flex-1 p-3 md:p-10 max-h-fit overflow-y-auto">
                                {children}
                            </main>
                        </div>
                    </>
                    : <Error title="Este contenido está protegido" description="Para verlo debes iniciar sesión" />
            }

        </>
    )
}

export default LayoutAdmin