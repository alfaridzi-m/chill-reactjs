import CardPortrait from "../card/card-portrait"

const NewrilisSection = ({title}) => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 py-5 text-white mb-5" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full">
                    {title && (
                    <h3 className="text-xl font-bold xl:text-3xl">Rilis Baru</h3>)}
                    <div className="flex flex-row gap-4 overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full">
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