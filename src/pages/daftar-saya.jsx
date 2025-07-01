import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import { useEffect, useState } from "react"
import axios from "axios"


const API_DAFTARSAYA_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/testung"

const Daftarsaya = () => {
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

    const deleteDaftar = async (id) => {
        const originalList = [...daftarSaya]
        const update = daftarSaya.filter(film => film.id !== id)
        setDaftarSaya(update)

        try {
            await axios.delete(`${API_DAFTARSAYA_URL}/${id}`)
        } catch (error) {
            console.error("Gagal menghapus item:", error)
            setDaftarSaya(originalList)
            alert("Gagal menghapus film dari daftar.")
        }
    }

    if (loading) {
        return (
            <>
                <Header />
                <div className="mt-20 flex justify-center p-5">
                    <p className="text-white text-xl">Memuat Daftar Saya...</p>
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
    console.log(daftarSaya)
    return (
        <>
            <Header/>
            <div className="mt-20 flex relative flex-col p-5 md:p-20 w-full items-center">
            <h5 className="text-left text-white text-2xl md:text-3xl mb-4 font-bold lg:ml-5 w-full md:w-[90%]">Daftar Saya</h5>
            <div className="flex justify-center w-full md:w-[90%]">
            {daftarSaya.length === 0 ? ( <p className="text-white">Kamu Belum menambahkan Film favorite</p> ) : (
                <div className="flex flex-row flex-wrap">
                    <div className="flex-row flex duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105 flex-wrap gap-4 justify-center cursor-pointer">
                    {daftarSaya.map(film => (
                    <div key={film.tmdbId} className="relative md:w-[120px] lg:w-[200px] w-[100px] hover:scale-105 cursor-pointer transition-all">
                    <img
                        src={film.image}
                        alt="Film favorit"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    <button
                        onClick={() => deleteDaftar(film.id)}
                        className="absolute top-0 right-0 bg-red-600 text-white text-[8px] md:text-sm px-2 py-1 rounded hover:bg-red-800 hover:scale-105 cursor-pointer transition-all"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
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

export default Daftarsaya