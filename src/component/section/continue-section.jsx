import CardLandscape from "../card-landscape"

const ContinueSection = () => {
    return (
        <>
           <section className="h-1/4 w-full bg-bl mt-5 pl-5 text-white" >
            <div className="">
                <div className="flex flex-col gap-5 h-full w-full">
                    <h3 className="text-xl font-bold">Melanjutkan Tonton Film</h3>
                    <div className="flex flex-row gap-4 overflow-x-auto w-full">
                        <CardLandscape title="Suzume" indexx={0}/>
                        <CardLandscape title="Megan" indexx={1}/>
                        <CardLandscape title="Jurassic World" indexx={2}/>
                        <CardLandscape title="Dilan" indexx={3}/>
                        <CardLandscape title="Sonic" indexx={4}/>
                        <CardLandscape title="Spiderman" indexx={5}/>
                        <CardLandscape title="Guardian Galaxy" indexx={6}/>
                        <CardLandscape title="Guardian Of galaxy" indexx={8}/>
                        <CardLandscape title="Missing" indexx={9}/>
                        <CardLandscape title="Megan" indexx={10}/>
                        <CardLandscape title="Jurassic World" indexx={11}/>
                        <CardLandscape title="Dilan" indexx={12}/>
                        <CardLandscape title="Sonic" indexx={13}/>
                        <CardLandscape title="Ant-Man" indexx={14}/>
                        <CardLandscape title="Anime Jepang" indexx={15}/>
                        <CardLandscape title="Doctor Strange" indexx={16}/>
                        <CardLandscape title="Black Adam" indexx={17}/>
                        <CardLandscape title="Devil All Time" indexx={18}/>
                        <CardLandscape title="Ted Lasso" indexx={19}/>
                        <CardLandscape title="Don't Look up" indexx={20}/>
                        <CardLandscape title="Film barat" indexx={21}/>                      
                    </div>
                 </div>
             </div>
            </section> 
            

        </>
    )

}
export default ContinueSection