import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
const API_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/testung"

function CardPortrait({id,imageLandscape,imagePotrait,description,title,top,baru,premium,setDetailData,rating}) {

  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState("")
  const [added, setAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const checkFavoriteStatus = async () => {
        const response = await axios.get(`${API_URL}`)
        const isMatch = response.data.some((item) => item.tmdbId === id)
        if (isMatch) {
          setAdded(true)
        }
    }
    checkFavoriteStatus()}, 
    [id])
  const toggleAdd = async () => {
    if (isLoading) return
    setIsLoading(true)

    if (added) {
      try {
        const getId = await axios.get(`${API_URL}?tmdbId=${id}`)
        const idDelete = getId.data[0].id
        await axios.delete(`${API_URL}/${idDelete}`)
        setNotificationText("Dihapus dari Favorit")
        setAdded(false)
      } catch (error) {
        console.error("Gagal menghapus favorit:", error)
        setNotificationText("Gagal Menghapus")
      }
    } else {
      const newFavorite = {
        tmdbId:id,
        title: title,
        image: imagePotrait,
        landscape: imageLandscape,
        description: description,
      }
      console.log(newFavorite)

      try {
        await axios.post(API_URL, newFavorite)
        setNotificationText("Ditambah ke Favorit")
        setAdded(true)
      } catch (error) {
        console.error("Gagal menambah favorit:", error)
        setNotificationText("Gagal Menambahkan")
      }
    }
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 1500)
    setIsLoading(false)
  }
  return (
  
  <div className="group relative flex flex-col flex-shrink-0 min-w-[100px] w-1/7 cursor-pointer">
    <div className="duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105">
      <img src={imagePotrait} className="h-auto w-full object-cover rounded-sm xl:rounded-xl" />
      {top && (
        <div className="bg-[#B71F1D] text-white text-center text-xs md:text-l  xl:text-base 2xl:text-2xl py-1 h-fit px-2 absolute top-0 right-2 md:right-4 rounded-bl-md rounded-tr-sm border-1 border-[#9b0e0e]"><p>Top</p><p>10</p></div>
      )}
      {baru && (
        <div className="bg-[#0F1E93] text-white text-center text-xs xl:text-base 2xl:text-xl py-1 h-fit px-2 absolute top-2 md:top-4 left-2 md:left-4 rounded-full"><p>Episode Baru</p></div>
      )}
       {premium && (
        <div className="bg-[#B7A207] text-white text-center text-xs xl:text-base 2xl:text-xl py-1 h-fit px-2 absolute top-2 md:top-4 left-2 md:left-4 rounded-full"><p>Episode Baru</p></div>
      )}
    </div>
    <div className="absolute z-40 md:w-[200px] lg:w-[400px] w-[150px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 bg-opacity-90 rounded-lg flex-col pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all group-hover:scale-105 duration-400 gap-3 text-white delay-100"
     style={{ transform: "translate(0,0)", zIndex: 9999 }}>
      <img src={imageLandscape} className="h-auto w-full object-cover xl:rounded-t-xl" />
      <div className="flex flex-row justify-between mt-3 text-[12px] md:text-sm lg:text-xl p-4">
        <div className="flex flex-row gap-3 justify-center items-center">
          <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black"><FontAwesomeIcon icon={faPlay} /></button>
          <div className="relative"><div
                className={`absolute -top-10 left-2 -translate-x-1/2 text-[10px] md:text-xs bg-white w-[150px] text-black px-2 py-1 rounded shadow-md z-50 transition-opacity duration-300 text-center ${showNotification ? "opacity-100" : "opacity-0 pointer-events-none"}`}>{notificationText}
              </div>
          </div>
          <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black" onClick={toggleAdd}>{added ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />} </button>
          
        </div>
        <div onClick={() => setDetailData({
          tmdbId:id,  
          title: title,
          image:imagePotrait,
          landscape: imageLandscape,
          description:description,
          rating : rating,
          genre:["Action","Horror","Thriller"]
        })}

        className="flex items-center justify-center lg:w-10 lg:h-10 w-5 h-5 rounded-full border-2 border-white px-3 hover:bg-white hover:border-black hover:text-black"><FontAwesomeIcon icon={faChevronDown} /></div>
      </div>
      <div className="flex flex-row justify-between mt-2 p-4">
        <p>Genre</p>
        <p>Genre</p>
        <p>Genre</p>
      </div>
    </div>

  </div>
  )



}

export default CardPortrait
