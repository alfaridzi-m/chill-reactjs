import { useRef, useState, useEffect } from "react";
import CardLandscape from "../card/card-landscape2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const ContinueSection = ({setDetailData}) => {

    const scrollRef =useRef(null)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left:-300, behavior:'smooth'})
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left:300, behavior:'smooth'})
        }
    }
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=4'
    const token = import.meta.env.VITE_TMDB_BEARER_TOKEN
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
        console.log(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
        fetchMovies();
    }, []); 
    if (loading) {
        return <div>Loading movies...</div>;
    }
    if (error) {
        return <div className="text-red-500 text-center">Error fetching data: {error.message}</div>;
    } 
    
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 text-white md:px-20">
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full relative">
                    <h3 className="text-xl font-bold
                     xl:text-3xl">Melanjutkan Tonton Film</h3>
                      <div className="w-full md:flex flex-row z-20 absolute top-1/2 -translate-y-1/2 hidden">
                        <button onClick={scrollLeft} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute left-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white"/>
                        </button>
                        <button onClick={scrollRight} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute right-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white"/>
                        </button>
                    </div>
                    <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto p-6 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full">
                    {movies.map((movie) => {
                        const imagPot = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        const imagLand = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        const roundRatting = movie.vote_average.toFixed(1)
                        return (
                        <CardLandscape
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imagePotrait={imagPot}
                            imageLandscape={imagLand}
                            description={movie.overview}
                            setDetailData={setDetailData}
                            rating={roundRatting}
                            
                        />
                        )
                    })}
                                            
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default ContinueSection