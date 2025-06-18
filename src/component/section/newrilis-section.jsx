import { useRef } from "react";
import CardPortrait from "../card/card-portrait"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NewrilisSection = ({title}) => {
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
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 md:mt-10 text-white mb-5 md:px-20" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full relative">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Rilis Baru</h3>)}
                     <div className="w-full md:flex flex-row z-20 absolute top-1/2 -translate-y-1/2 hidden">
                        <button onClick={scrollLeft} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute left-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white"/>
                        </button>
                        <button onClick={scrollRight} className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute right-0 cursor-pointer">

                            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white"/>
                        </button>
                    </div>
                    <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto p-6 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full">
                    <CardPortrait title="Satu" indexx="0" baru/>     
                    <CardPortrait title="Satu" indexx="27" baru/>    
                    <CardPortrait title="Satu" indexx="28" baru/>    
                    <CardPortrait title="Satu" indexx="29" top/>    
                    <CardPortrait title="Satu" indexx="30" baru/>    
                    <CardPortrait title="Satu" indexx="31" baru />    
                    <CardPortrait title="Satu" indexx="1" top/>    
                    <CardPortrait title="Satu" indexx="22" baru/>    
                    <CardPortrait title="Satu" indexx="13" baru/>    
                    <CardPortrait title="Satu" indexx="4" top/>    
                    <CardPortrait title="Satu" indexx="10" baru/>    
                    <CardPortrait title="Satu" indexx="25" baru/>    
                    <CardPortrait title="Satu" indexx="7" baru/>    
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default NewrilisSection