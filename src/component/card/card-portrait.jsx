const images = import.meta.glob('../../assets/etc/potrait/*.png', { eager: true });


const data = Object.keys(images).map((path) => {
  return {
    image: images[path].default,

  };
});

console.log({data});

function CardPortrait({indexx,top,baru}) {
  const imageData = data [indexx]
  return (
  <div className="flex flex-col flex-shrink-0 min-w-[140px] w-1/7 relative">
      <img src={imageData.image} className="w-full h-auto object-cover" />
      {top && (
        <div className="bg-[#B71F1D] text-white text-center text-sm md:text-l  xl:text-2xl py-1 h-fit px-2 absolute top-0 right-2 md:right-4 rounded-bl-sm rounded-tr-sm"><p>Top</p><p>10</p></div>
      )}
      {baru && (
        <div className="bg-[#0F1E93] text-white text-center text-sm md:text-l xl:text-2xl py-1 h-fit px-2 absolute top-2 md:top-4 left-2 md:left-4 rounded-full"><p>Episode Baru</p></div>
      )}

  </div>
  );



}

export default CardPortrait;
