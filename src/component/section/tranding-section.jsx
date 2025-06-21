import { useRef } from "react";
import CardPortrait from "../card/card-portrait"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const TrandingSection = ({title}) => {
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
           <section className="h-1/4 w-full bg-bl mt-5 md:mt-10 pl-5 text-white mb-5 md:px-20" >
            <div className="flex relative w-full">
                <div className="flex flex-col gap-5 h-full w-full relative">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Film Trending</h3>)}
                    <div className="w-full md:flex flex-row z-20 absolute top-1/2 -translate-y-1/2 hidden">
                        <button onClick={scrollLeft} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute left-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white"/>
                        </button>
                        <button onClick={scrollRight} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute right-0 cursor-pointer">

                            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white"/>
                        </button>
                    </div>
                    <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto p-6 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full z-0">
                    <CardPortrait title="true" indexx="14" top/>     
                    <CardPortrait title="Satu" indexx="15" top/>    
                    <CardPortrait title="Satu" indexx="16" top/>    
                    <CardPortrait title="Satu" indexx="17" top/>    
                    <CardPortrait title="Satu" indexx="18" top/>    
                    <CardPortrait title="Satu" indexx="19" top/>    
                    <CardPortrait title="Satu" indexx="20" top/>    
                    <CardPortrait title="Satu" indexx="21" top/>    
                    <CardPortrait title="Satu" indexx="22" top/>    
                    <CardPortrait title="Satu" indexx="23" top/>    
                    <CardPortrait title="Satu" indexx="24" top/>    
                    <CardPortrait title="Satu" indexx="25" top/>    
                    <CardPortrait title="Satu" indexx="26" top/>    
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default TrandingSection