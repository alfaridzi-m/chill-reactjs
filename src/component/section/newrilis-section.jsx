import { useRef, useEffect } from "react"
import CardPortrait from "../card/card-portrait2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useMovieStore } from "../../store/movieStore"
import CardSkeleton from "../card/potrait-skeleton"

const NewrilisSkeleton = () => {
    return (
        <section className="h-1/4 w-full pl-5 md:mt-10 text-white my-5 md:px-20 animate-pulse">
            <div className="h-8 bg-zinc-700 rounded w-1/3 mb-5"></div>
            <div className="flex flex-row gap-4 overflow-hidden w-full p-6">
                {Array.from({ length: 7 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

const NewrilisSection = ({title,setDetailData}) => {
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

    const { 
      trendingMovies: movies, 
      trendingLoading: loading, 
      trendingError: error, 
      fetchTrendingMovies 
    } = useMovieStore()

  useEffect(() => {
    fetchTrendingMovies()
  }, [fetchTrendingMovies]) 
  if (loading) {
    return <NewrilisSkeleton />
  }
  if (error) {
    return <div className="text-red-500 text-center">Error fetching data: {error.message}</div>
  } 
    return (
        <>
           <section className="h-1/4 w-full bg-bl pl-5 md:mt-10 text-white my-5 md:px-20 z-20" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full relative z-10">
                    <h3 className="text-xl font-bold xl:text-3xl">Film Baru</h3>
                    <div className="w-full md:flex flex-row z-20 absolute top-1/2 -translate-y-1/2 hidden">
                        <button onClick={scrollLeft} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute left-0 cursor-pointer">

                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white"/>
                        </button>
                        <button onClick={scrollRight} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute right-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white"/>
                        </button>
                    </div>
                    <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto w-full p-6 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full z-0">
                    {movies.map((movie) => {
                        const imagPot = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        const imagLand = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        const roundRatting = movie.vote_average.toFixed(1)

                        return (
                        <CardPortrait
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imagePotrait={imagPot}
                            imageLandscape={imagLand}
                            description={movie.overview}
                            setDetailData={setDetailData}
                            rating={roundRatting}
                            baru
                            
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
export default NewrilisSection