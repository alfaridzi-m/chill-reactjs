import CardPortrait from "../card/card-portrait"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const TopratingSection = ({title}) => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl pl-5 md:mt-10 text-white my-5 md:px-20" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full relative">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Top Rating Film dan Series Hari Ini</h3>)}
                    <div className="w-full md:flex flex-row z-20 absolute top-1/2 -translate-y-1/2 hidden">
                        <button className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute left-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white"/>
                        </button>
                        <button className="bg-[#2F3334] border-1 border-[rgba(231,227,252,0.23)] rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400 transition-colors absolute right-0 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white"/>
                        </button>
                    </div>
                    <div className="flex flex-row gap-4 overflow-x-auto w-full [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full">
                    <CardPortrait title="Satu" indexx="1" top/>     
                    <CardPortrait title="Satu" indexx="2" />    
                    <CardPortrait title="Satu" indexx="3" />    
                    <CardPortrait title="Satu" indexx="4" top/>    
                    <CardPortrait title="Satu" indexx="5" top/>    
                    <CardPortrait title="Satu" indexx="6" />    
                    <CardPortrait title="Satu" indexx="7" top/>    
                    <CardPortrait title="Satu" indexx="8" />    
                    <CardPortrait title="Satu" indexx="9" />    
                    <CardPortrait title="Satu" indexx="10" top/>    
                    <CardPortrait title="Satu" indexx="11" />    
                    <CardPortrait title="Satu" indexx="12" top/>    
                    <CardPortrait title="Satu" indexx="13" />    
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default TopratingSection