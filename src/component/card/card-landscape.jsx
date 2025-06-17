import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const images = import.meta.glob('../../assets/etc/landscape/*.png', { eager: true });
console.log(images);

const data = Object.keys(images).map((path) => {
  return {
    image: images[path].default,
    rating: (Math.random() * 2 + 3).toFixed(1) 

  };
});

console.log({data});

function CardLandscape({title, indexx}) {
  const imageData = data [indexx]
  return (
  <div className="flex flex-col relative flex-shrink-0 min-w-[350px] w-1/4">
      <img src={imageData.image} className="z-10 w-full h-auto object-cover" />
      <div className="flex flex-row bottom-0 font-bold text-sm md:text-xl absolute z-20 w-full justify-around align-middle items-center h-1/4 bg-linear-to-t from-black ">
          <h4>{title}</h4>
          <div className="flex flex-row gap-1.5 items-center">
              <FontAwesomeIcon icon={faStar} />
              <h4 className="font-normal">{imageData.rating}/5</h4>
          </div>
      </div>
  </div>
  );



}

export default CardLandscape;
