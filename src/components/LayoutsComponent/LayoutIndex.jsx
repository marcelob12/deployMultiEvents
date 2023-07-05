import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Head from 'next/head'

const LayoutIndex = ({ children, title = "", visible = true }) => {

    return (
        <>
            <div className={`${visible ? "bg-index-img" : ""} `}>
                <Head>
                    <title>{`MultiEvents | ${title}`}</title>
                </Head>

                {visible && (
                    <Navbar />
                )}

                {children}

                {visible && (
                    <Footer />
                )}
            </div>
        </>
    )
}

export default LayoutIndex