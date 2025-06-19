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
console.log({imageLandscape})
console.log({data});

function CardPortrait({indexx,top,baru,premium}) {
  const imageData = data [indexx]
  const imageDataLandscape = imageLandscape [indexx]
  return (
  
  <div className="group relative flex flex-col flex-shrink-0 min-w-[100px] w-1/7 cursor-pointer">
    <div className="transition-transform duration-300 group-hover:scale-105">
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
    <div className=" absolute z-50 w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 rounded-lg p-4 hidden group-hover:flex flex-col pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 group-hover:delay-2000 transition-all duration-300">
      <img src={imageDataLandscape.image} className="h-auto w-full object-cover" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <button className="bg-white border-1 border-white rounded-full w-5 h-5">Play</button>
          <button className="bg-white border-1 border-black rounded-full w-5 h-5">+</button>
        </div>
        <div className="w-fit rounded-full border-2 border-white">Detail</div>
      </div>
    </div>

  </div>
  );



}

export default CardPortrait;
