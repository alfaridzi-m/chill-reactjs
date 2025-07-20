import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useFilmDetailStore } from "../store/film";

const ModalDetail= ({ detail, onClose }) => {
  const[show,setShow] =useState(false)
  const { resetFilmDetail } = useFilmDetailStore()
  
  useEffect(()=>{
    setTimeout(() => setShow(true),10)
  },[])
  
  const handleClose= () => {
    setShow(false)
    setTimeout(()=> {
      onClose()
      resetFilmDetail()
    },200)
  }
  return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/70 backdrop-blur-xs">
    <div
      className={`bg-[#1a1a1a] flex flex-col justify-center text-white rounded-lg max-w-2xl w-fit relative transition-all duration-300 ease-out
        ${show ? "scale-100" : "scale-20"}`}
    >
      <button
        onClick={handleClose}
        className="absolute top-3 right-5 text-xl bg-red-500 w-5 h-5 items-center align-middle flex justify-center rounded-full cursor-pointer hover:bg-red-800"
      >
        &times;
      </button>
        <img src={detail.landscape} alt={detail.title} className="w-full rounded-t-xl" />
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-2xl font-bold mb-2">{detail.title}</h2>
        <p>Rating: {detail.rating || 'N/A'}</p>
        <p>Genre: {detail.genre && Array.isArray(detail.genre) ? detail.genre.join(", ") : 'N/A'}</p>
        <p className="mt-2 text-sm text-gray-300 text-justify">
          {detail.description}
        </p>
      <div className="mt-4 flex gap-3 w-full">
        <button className="bg-white text-black px-4 py-2 rounded cursor-pointer">
          <FontAwesomeIcon icon={faPlay}/>
        </button>
        <button className="border border-white px-4 py-2 rounded cursor-pointer">
          Detail Lain
        </button>
      </div>
      </div>
     </div>
  </div>
);

}

export default ModalDetail;
