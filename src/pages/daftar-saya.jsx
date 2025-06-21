import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import { useEffect, useState } from "react"


const Daftarsaya = () => {
    const [daftarSaya, setDaftarSaya] = useState([])

    useEffect(() => {
        const storeDaftarsaya = JSON.parse(localStorage.getItem("myFavorites")) || []
        setDaftarSaya(storeDaftarsaya)
    }, [])
    const deleteDaftar = (id) => {
        const updated = daftarSaya.filter(film => film.id !== id)
        setDaftarSaya(updated)
        localStorage.setItem("myFavorites", JSON.stringify(updated))
    }
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