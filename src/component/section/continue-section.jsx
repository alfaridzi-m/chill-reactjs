import { useRef } from "react";
import CardLandscape from "../card/card-landscape"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ContinueSection = () => {
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
                        <CardLandscape title="Suzume" indexx={0}/>
                        <CardLandscape title="Megan" indexx={1}/>
                        <CardLandscape title="Jurassic World" indexx={2}/>
                        <CardLandscape title="Dilan" indexx={3}/>
                        <CardLandscape title="Sonic" indexx={4}/>
                        <CardLandscape title="Spiderman" indexx={5}/>
                        <CardLandscape title="Guardian Galaxy" indexx={6}/>
                        <CardLandscape title="Doctor Strange" indexx={8}/>
                        <CardLandscape title="Black Adam" indexx={9}/>
                        <CardLandscape title="Devil All The Time" indexx={10}/>
                        <CardLandscape title="The Batman" indexx={11}/>
                        <CardLandscape title="Ted Lasso" indexx={12}/>
                        <CardLandscape title="Don't Look Up" indexx={13}/>
                        <CardLandscape title="Unknown" indexx={14}/>
                        <CardLandscape title="Stuart Little" indexx={15}/>
                        <CardLandscape title="Baymax" indexx={16}/>
                        <CardLandscape title="Film Korea" indexx={17}/>
                        <CardLandscape title="Guardian Of The Galaxy" indexx={18}/>
                        <CardLandscape title="Al of Us Dead" indexx={19}/>
                        <CardLandscape title="Alice In Borderland" indexx={20}/>
                        <CardLandscape title="Missing" indexx={21}/>                      
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default ContinueSection