import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import { useState, useEffect } from "react"
import { useFavoriteStore } from "../store/favoriteStore"
import axios from "axios"

const DaftarSayaSkeleton = () => {
    return (
        <>
            <Header />
            <div className="mt-20 flex relative flex-col p-5 md:p-20 w-full items-center animate-pulse">
                <div className="h-8 bg-zinc-700 rounded w-1/3 md:w-1/4 mb-6 self-start lg:ml-5"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 w-full md:w-[90%]">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <div key={index} className="aspect-[2/3] bg-zinc-800 rounded-lg"></div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

const API_DAFTARSAYA_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/testung"

const Daftarsaya = () => {
    const { favorites, removeFromFavorites, addToFavorites } = useFavoriteStore()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_DAFTARSAYA_URL)
                setApiData(response.data)
                response.data.forEach(film => {

                    const movieData = {
                        id: film.id,
                        title: film.title,
                        image: film.image,
                        description: film.description || "",
                        rating: film.rating || "0"
                    }
                    if (!favorites.some(fav => fav.id === film.id)) {
                        addToFavorites(movieData)
                    }
                })
            } catch (err) {
                console.error("Gagal mengambil list", err)
                setError("Mohon maaf daftar saya gagal dimuat, silahkan coba lagi")
            } finally {
                setLoading(false)
            }      
        }
        fetchData()
    }, [])

    const deleteDaftar = async (id) => {
        try {
            removeFromFavorites(id)
            await axios.delete(`${API_DAFTARSAYA_URL}/${id}`)
        } catch (error) {
            console.error("Gagal menghapus item:", error)
            alert("Gagal menghapus film dari daftar.")
        }
    }

    if (loading) {
        return <DaftarSayaSkeleton />
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
            <div className="mt-20 flex relative flex-col p-5 md:p-20 w-full items-center">
            <h5 className="text-left text-white text-2xl md:text-3xl mb-4 font-bold lg:ml-5 w-full md:w-[90%]">Daftar Saya</h5>
            <div className="flex justify-center w-full md:w-[90%]">
            {favorites.length === 0 ? ( <p className="text-white">Kamu Belum menambahkan Film favorite</p> ) : (
                <div className="flex flex-row flex-wrap">
                    <div className="flex-row flex duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105 flex-wrap gap-4 justify-center cursor-pointer">
                    {favorites.map(film => (
                    <div key={film.id} className="relative md:w-[120px] lg:w-[200px] w-[100px] hover:scale-105 cursor-pointer transition-all">
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