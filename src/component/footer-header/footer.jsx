import Logo from "../../assets/icon/Logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router"
import { useState } from "react"


const Footer = () => {
    const [genreOpen, SetGenreOpen] = useState(false)
    const [helpOpen, SetHelpOpen] = useState(false)
    const toggleGenre = () => {SetGenreOpen(!genreOpen)}
    const toggleHelp = () => {SetHelpOpen(!helpOpen)}
    return (
        <footer className="bg-black text-[#C1C2C4] border-t-1 border-[rgba(231,227,252,0.23)] flex flex-row flex-wrap justify-between px-5 py-5 md:px-14 md:py-14">
            <div className="flex flex-col justify-center">
                <img className="w-2/3" src={Logo} alt="chill" />
                <p className="mt-4 text-xs">@2023 Chill All Rights Reserved.</p>
            </div>
            <div className="mt-10 md:mt-0 w-full md:w-fit">
                <div className="text-white font-semibold flex flex-row justify-between " onClick={toggleGenre}>
                    <h2 >Genre</h2>
                    <FontAwesomeIcon className={`flex md:invisible ${genreOpen ? 'rotate-180' : ''}`} icon={faCaretDown} />
                </div>
                <div className={`flex-row gap-5 ${genreOpen ? 'flex' : 'hidden'} md:flex `}>
                    <div className="item-footer">
                        <ul>
                            <Link to='/genre/aksi'><li className="hover:text-blue-800">Aksi</li></Link>
                            <Link to='/genre/kids'><li className="hover:text-blue-800">Anak-anak</li></Link>
                            <Link to='/genre/anime'><li className="hover:text-blue-800">Anime</li></Link>
                            <Link to='/genre/britania'><li className="hover:text-blue-800">Britania</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/genre/Drama'><li className="hover:text-blue-800">Drama</li></Link>
                            <Link to='/genre/Fantasi'><li className="hover:text-blue-800">Fantasi Ilmiah&Fantasi</li></Link> 
                            <Link to='/genre/Kejahatan'><li className="hover:text-blue-800">Kejahatan</li></Link>
                            <Link to='/genre/KDrama'><li className="hover:text-blue-800">KDrama</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/genre/komedi'><li className="hover:text-blue-800">Komedi</li></Link>
                            <Link to='/genre/petualangan'><li className="hover:text-blue-800">Petualangan</li></Link>
                            <Link to='/genre/Perang'><li className="hover:text-blue-800">Perang</li></Link>
                            <Link to='/genre/Perang'><li className="hover:text-blue-800">Perang</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <Link to='/genre/Sains'><li className="hover:text-blue-800">Sains & Alam</li></Link>
                        <Link to='/genre/Thriller'><li className="hover:text-blue-800">Thriller</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-fit mt-2">
                <div className="text-white font-semibold flex flex-row justify-between " onClick={toggleHelp}>
                    <h2>Bantuan</h2>
                    <FontAwesomeIcon className={`flex md:invisible ${helpOpen ? 'rotate-180' : ''}`} icon={faCaretDown} />
                </div>
                <div className={`${helpOpen ? 'flex' : 'hidden'}  md:flex`}>
                <ul>
                <Link to='/bantuan/faq'><li className="hover:text-blue-800">FAQ</li></Link>
                <Link to='/bantuan/privasi'><li className="hover:text-blue-800">Privasi</li></Link>
                <Link to='/bantuan/kontak'><li className="hover:text-blue-800">Kontak Kami</li></Link>
                <Link to='/bantuan/sdk'><li className="hover:text-blue-800">Syarat & Ketentuan</li></Link>
                </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer