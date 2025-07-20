import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useFavoriteStore } from "../../store/favoriteStore"
import { useFilmDetailStore } from "../../store/film"


function CardLandscape({title, id, imageLandscape,imagePotrait ,description, rating}) {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState("")
  
  const { favorites, addToFavorites, removeFromFavorites } = useFavoriteStore()
  const { fetchFilmDetail } = useFilmDetailStore()
  const added = favorites.some(movie => movie.id === id)

  const toggleAdd = () => {
    if (added) {  
      removeFromFavorites(id);
      setNotificationText("Dihapus dari Favorit")
    } else {
      const newFavorite = {
        id: id,
        title: title,
        image: imagePotrait,
        landscape: imageLandscape,
        description: description,
        rating: rating
      };
      addToFavorites(newFavorite);
      setNotificationText("Ditambah ke Favorit")
    }

    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    },1000)
  }

  return (
  <div className="group relative flex flex-col flex-shrink-0 min-w-[350px] w-1/4 cursor-pointer">
    <div className='duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105 '>
    <img src={imageLandscape} className="z-10 w-full h-auto object-cover" />
      <div className="flex flex-row bottom-0 font-bold text-sm md:text-xl absolute z-20 w-full justify-around align-middle items-center h-1/4 bg-linear-to-t from-black ">
          <h4>{title}</h4>
          <div className="flex flex-row gap-1.5 items-center">
              <FontAwesomeIcon icon={faStar} />
              <h4 className="font-normal">{rating}/10</h4>
          </div>
      </div>
    </div>
    <div className="absolute z-50 md:w-[400px] lg:w-[300px] w-[200px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 bg-opacity-90 rounded-lg p-4 flex-col pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-400 gap-5 text-white"
      style={{ transform: "translate(0,0)", zIndex: 9999 }}>
        <img src={imageLandscape} className="h-auto w-full object-cover" />
        <div className="flex flex-row justify-between mt-3 text-[12px] md:text-sm lg:text-xl">
          <div className="flex flex-row gap-3 justify-center items-center">
            <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black"><FontAwesomeIcon icon={faPlay} />
            </button>
            <div className="relative"><div
                className={`absolute -top-10 left-2 -translate-x-1/2 text-[10px] md:text-xs bg-white text-black px-2 py-1 rounded shadow-md z-50 transition-opacity duration-300 ${showNotification ? "opacity-100" : "opacity-0 pointer-events-none"}`}>{notificationText}
              </div>
            </div>
            <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black" onClick={toggleAdd}>{added ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />} </button>

          </div>
           <div onClick={() => fetchFilmDetail({
            id: id,
            title: title,
            image: imagePotrait,
            landscape: imageLandscape,
            description: description,
            rating: rating,
            genre: ["Action","Horror","Thriller"]
          })}
          className="flex items-center justify-center lg:w-10 lg:h-10 w-5 h-5 rounded-full border-2 border-white px-3 hover:bg-white hover:border-black hover:text-black"><FontAwesomeIcon icon={faChevronDown} /></div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <p>Genre</p>
          <p>Genre</p>
          <p>Genre</p>
        </div>
    </div>
  </div>
  );



}

export default CardLandscape;
