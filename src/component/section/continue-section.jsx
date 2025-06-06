import CardLandscape from "../card/card-landscape"

const ContinueSection = () => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 text-white" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full">
                    <h3 className="text-xl font-bold xl:text-3xl">Melanjutkan Tonton Film</h3>
                    <div className="flex flex-row gap-4 overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full w-full">
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