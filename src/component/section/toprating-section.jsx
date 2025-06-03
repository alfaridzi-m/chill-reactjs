import CardPortrait from "../card/card-portrait"

const TopratingSection = () => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 py-5 text-white mb-5" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full">
                    <h3 className="text-xl font-bold">Top Rating Film dan Series Hari Ini</h3>
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