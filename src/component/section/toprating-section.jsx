import { useRef } from "react";
import CardPortrait from "../card/card-portrait2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from "react";

const TopratingSection = ({title,setDetailData}) => {
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    // Definisikan URL dan options untuk Axios
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=3';
    const options = {
      headers: {
        accept: 'application/json',
        // PENTING: Sebaiknya, simpan API Key Anda di environment variable (.env)
        // dan jangan menuliskannya langsung di kode untuk alasan keamanan.
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA2ZTRjMmQwOTNjMTI0OTMxZDQxNjYxZjM3YmFjOCIsIm5iZiI6MTc1MDIzMjc3MS41NjQsInN1YiI6IjY4NTI2ZWMzYmYyZGYxYTY0MjBlN2YzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Dk3wu3CuVCN7CZScRLaWVTFEZRNC5dvyG9ndc3-D0Q'
      }
    };

    // Buat fungsi async untuk fetching data
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, options);
        // Data film dari TMDB ada di dalam 'response.data.results'
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // Array dependensi kosong [] agar useEffect hanya berjalan sekali saat komponen mount

  // Tampilkan pesan loading saat data sedang diambil
  if (loading) {
    return <div>Loading movies...</div>;
  }

  // Tampilkan pesan error jika terjadi kesalahan
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
console.log(movies);
    
    return (
        <>
           <section className="h-1/4 w-full bg-bl pl-5 md:mt-10 text-white my-5 md:px-20 z-20" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full relative z-10">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Top Rating Film dan Series Hari Ini</h3>)}
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
                        return (
                        <CardPortrait
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imagePotrait={imagPot}
                            imageLandscape={imagLand}
                            description={movie.overview}
                            setDetailData={setDetailData}
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
export default TopratingSection