import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const images = import.meta.glob('../../assets/etc/potrait/*.png', { eager: true });


const data = Object.keys(images).map((path) => {
  return {
    image: images[path].default,

  };
});
const dataLandscape = import.meta.glob('../../assets/etc/landscape/*.png', { eager: true });

const imageLandscape = Object.keys(dataLandscape).map((path) => {
  return {
    image: dataLandscape[path].default,

  };
});

function CardPortrait({indexx,top,baru,premium,setDetailData}) {
  const imageData = data [indexx]
  const imageDataLandscape = imageLandscape [indexx]
  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState("")
  const isAlreadyAdded = () => {
    const favorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
    return favorites.some(item => item.id === indexx);
  }
  const [added, setAdded] = useState(isAlreadyAdded());

  const toggleAdd = () => {
  const favorites = JSON.parse(localStorage.getItem("myFavorites")) || [];

  if (added) {
    const updated = favorites.filter(item => item.id !== indexx);
    localStorage.setItem("myFavorites", JSON.stringify(updated));
    setNotificationText("Dihapus")
  } else {
    const newFavorite = {
      id: indexx,
      image: imageData.image,
      landscape: imageDataLandscape.image
    };
    favorites.push(newFavorite);
    localStorage.setItem("myFavorites", JSON.stringify(favorites));
    setNotificationText("Favorite")
  }

  setAdded(!added);
  setShowNotification(true)
  setTimeout(() => {
    setShowNotification(false)
  },1000)
};

  return (
  
  <div className="group relative flex flex-col flex-shrink-0 min-w-[100px] w-1/7 cursor-pointer">
    <div className="duration-800 opacity-100 group-hover:opacity-0 transition-all group-hover:scale-105">
      <img src={imageData.image} className="h-auto w-full object-cover" />
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
    <div className="absolute z-40 md:w-[200px] lg:w-[400px] w-[150px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 bg-opacity-90 rounded-lg p-4 flex-col pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all group-hover:scale-105 duration-400 gap-5 text-white delay-100"
     style={{ transform: "translate(0,0)", zIndex: 9999 }}>
      <img src={imageDataLandscape.image} className="h-auto w-full object-cover" />
      <div className="flex flex-row justify-between mt-5 text-[12px] md:text-sm lg:text-xl">
        <div className="flex flex-row gap-3 justify-center items-center">
          <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black"><FontAwesomeIcon icon={faPlay} /></button>
          <div className="relative"><div
                className={`absolute -top-10 left-2 -translate-x-1/2 text-[10px] md:text-xs bg-white text-black px-2 py-1 rounded shadow-md z-50 transition-opacity duration-300 ${showNotification ? "opacity-100" : "opacity-0 pointer-events-none"}`}>{notificationText}
              </div>
          </div>
          <button className="flex justify-center items-center border-1 border-white rounded-full lg:w-10 lg:h-10 w-5 h-5 cursor-pointer hover:bg-white hover:border-black hover:text-black" onClick={toggleAdd}>{added ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />} </button>
          
        </div>
        <div onClick={() => setDetailData({
          id:indexx,
          title: `Film ${indexx}`,
          image:imageData.image,
          landscape: imageDataLandscape.landscape,
          rating : `${(Math.random()*2+3).toFixed(1)}/5`,
          genre:["Action","Horror","Thriller"]
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

export default CardPortrait;
