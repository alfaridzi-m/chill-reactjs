import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ModalDetail= ({ detail, onClose }) => {
  const[show,setShow] =useState(false)
  useEffect(()=>{
    setTimeout(() => setShow(true),10)
  },[])
  const handleClose= () => {
    setShow(false)
    setTimeout(()=> {
      onClose()
      
    },200)
  }
  return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/70 backdrop-blur-xs">
    <div
      className={`bg-[#1a1a1a] text-white rounded-lg max-w-2xl w-fit p-6 relative transition-all duration-200 ease-out
        ${show ? "scale-100" : "scale-40"}`}
    >
      <button
        onClick={handleClose}
        className="absolute top-3 right-5 text-xl bg-red-500 w-5 h-5 items-center align-middle flex justify-center rounded-full cursor-pointer hover:bg-red-800"
      >
        &times;
      </button>
      <img src={detail.landscape} alt={detail.title} className="w-[400px] rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{detail.title}</h2>
      <p>Rating: {detail.rating}</p>
      <p>Genre: {detail.genre.join(", ")}</p>
      <p className="mt-2 text-sm text-gray-300">
        {detail.description}
      </p>
      <div className="mt-4 flex gap-3">
        <button className="bg-white text-black px-4 py-2 rounded cursor-pointer">
          <FontAwesomeIcon icon={faPlay}/>
        </button>
        <button className="border border-white px-4 py-2 rounded cursor-pointer">
          Detail Lain
        </button>
      </div>
     </div>
  </div>
);

}

export default ModalDetail;
