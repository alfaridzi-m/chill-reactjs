import CardPortrait from "../card/card-portrait"

const TrandingSection = ({title}) => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 py-5 text-white mb-5" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Film Tranding</h3>)}
                    <div className="flex flex-row gap-4 overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full">
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