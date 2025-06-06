import {Link} from 'react-router'
import BgLogin from "../assets/etc/BG_login.jpg"
const NoPage = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${BgLogin})` }} className="font-lato bg-cover bg-center flex flex-col flex-wrap justify-center items-center h-svh">
                <div className='w-1/4 h-1/4 bg-white/30 backdrop-blur-md flex flex-col justify-center items-center gap-3 rounded-2xl drop-shadow-2xl'>
                    <h1>Halaman tidak ditemukan</h1>
                    <p>404</p>
                    <Link to={'/'}><button className='bg-gray-200 backdrop-blur-xl rounded-2xl p-2.5 cursor-pointer scale-none hover:scale-110 ease-in'>Kembali Ke home</button></Link>
                </div>
            </div>
        </>
    )
}

export default NoPage