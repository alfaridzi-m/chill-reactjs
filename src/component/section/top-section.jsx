import Image from "../../assets/etc/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark,faCircleInfo } from '@fortawesome/free-solid-svg-icons'
const Topsection = () => {
  return (
  <>
    <section className="h-2/5 md:h-1/2 xl:h-2/3 pt-10 md:pt-20">
            <div  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${Image})` }} className="bg-cover bg-center h-full text-white">
                <div className="h-full flex flex-col align-bottom justify-end px-5 py-10 md:p-20">
                    <h3 className="text-2xl font-bold">Up!!!</h3>
                    <div className="max-md:text-ellipsis max-md:whitespace-nowrap max-md:overflow-hidden mt-6">Carl Fredricksen, a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house. A Pixar animation.</div>
                    <div className="flex flex-row gap-2 items-center mt-6 relative"> 
                        <button className="bg-[#0F1E93] rounded-4xl px-6 py-2"><p>Mulai</p></button>
                        <button className="bg-[#22282A] rounded-4xl px-6 py-2 flex flex-row items-center gap-3">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <p>Selengkapnya</p>
                            </button>
                        <div className="border-1 border-gray-400 rounded-full py-1 px-2">
                            <p>18+</p>
                        </div>
                        <FontAwesomeIcon icon={faVolumeXmark} className="absolute right-8" />
                    </div>
                </div>
            </div>
        </section>
  </>
  )
}

export default Topsection