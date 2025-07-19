import Header from "../component/footer-header/header"
import Footer from "../component/footer-header/footer"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const API_DAFTARSAYA_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/testung"
const Account = () => {
    const [daftarSaya, setDaftarSaya] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const listDaftar = async () => {
            try {
                const response = await axios.get(API_DAFTARSAYA_URL)
                setDaftarSaya(response.data)
                console.log(response.data)
            } catch (err) {
                console.error("Gagal mengambil list", err)
                setError("Mohon maaf daftar saya gagal dimuat, silahkan coba lagi")
            } finally {
                setLoading(false)
            }      
        }
        listDaftar()
    },[])

    if (loading) {
        return (
            <>
                <Header />
                <div className="mt-20 flex justify-center p-5">
                    <p className="text-white text-xl">...</p>
                </div>
                <Footer />
            </>
        )
    }
    if (error) {
         return (
            <>
                <Header />
                <div className="mt-20 flex justify-center p-5">
                    <p className="text-red-500 text-xl">{error}</p>
                </div>
                <Footer />
            </>
        )
    }
    return (
    <>
    <Header/>
    <div className="h-[80vh] bg-amber-50 mt-3.5 md:mt-20">
        <h1 className="text-black text-2xl font-bold">Profil Saya</h1>
        <div>
            <div className="flex flex-row items-center md:gap-3">
                <div className="bg-red-500 rounded-full w-16 h-16"></div>
                <div >
                    <button className="border-2 border-[#09147A] text-[#09147A] rounded-full     px-4 py-2">Ubah Foto</button>
                    <p className="text-[#09147A]">Maksimal 2MB</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <button className="bg-[#09147A] text-white rounded-full px-4 py-2">Simpan</button>
    </div>
    <div className="flex relative flex-col w-full items-center md:mt-2">
        <div className="flex justify-between w-full items-center md:px-25">
            <h3 className="text-left text-white text-2xl md:text-3xl mb-4 font-bold w-full md:w-[90%]">Daftar Saya</h3>
            <Link to="/daftarsaya"><p className="text-white text-right w-full hover:text-blue-500">Lihat Semua</p></Link>
        </div>
            <div className="flex justify-center">
            {daftarSaya.length === 0 ? ( <p className="text-white">Kamu Belum menambahkan Film favorite</p> ) : (
                <div className="flex flex-row flex-wrap">
                    <div className="flex-row flex duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105 flex-wrap gap-4 justify-center cursor-pointer">
                    {daftarSaya.slice(0,8).map(film => (
                    <div key={film.tmdbId} className="relative md:w-[120px] lg:w-[200px] w-[100px] hover:scale-105 cursor-pointer transition-all">
                    <img
                        src={film.image}
                        alt="Film favorit"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                     ))}
                    </div> 
                </div>
                 )}
            </div>
            </div>
    <Footer/>
    </>
    )
}

export default Account