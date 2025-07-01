import Logo from "../../assets/icon/clipper.svg"
import User from "../../assets/icon/cat-icon.jpg"
import Chill from "../../assets/icon/CHILL.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className="bg-black px-3.5 py-3.5 md:px-20 md:py-5 flex-wrap w-full fixed text-white shadow-xl z-50 top-0">
                <nav className="flex flex-row justify-around md:justify-between h-fit">
                    <ul className="flex flex-row gap-4 md:gap-20 items-center  text-base md:text-xl box-border">
                        <li className="flex flex-row gap-1 items-end"><Link to='/'><img src={Logo} href="chill.html" className="w-7 md:w-12"/></Link><Link to='/'><img className="w-25 hidden md:flex p-0" src={Chill} alt="-" /></Link> </li>
                        <li className="hover:bg-gray-800 p-2 hover:rounded-xl hover:border-0.5"><Link to='/Series'>Series</Link></li>
                        <li className="hover:bg-gray-800 p-2 hover:rounded-xl hover:border-0.5 " ><Link to='/Series'>Film</Link></li>
                        <li className="hover:bg-gray-800 p-2 hover:rounded-xl hover:border-0.5 text-ellipsis whitespace-nowrap overflow-hidden"><Link to='/daftarsaya'>Daftar Saya</Link></li>
                    </ul>
                    <div className="flex flex-row w-1/5 items-center gap-1.5 justify-end">
                        <img className=" w-6 rounded-full hover:rounded-sm cursor-pointer border-1 border-gray-500 md:w-10" src={User} alt="user"/>
                        <div className="relative group flex flex-col">
                            <span><FontAwesomeIcon icon={faCircleChevronDown} className="cursor-pointer text-l md:text-2xl text-white" /></span>
                            <div className="absolute top-3 right-2 hidden group-hover:flex flex-col px-3 py-1 rounded-xl bg-black border-1 border-gray-800 text-white md:w-35 gap-3">
                                <a className="hover:text-blue-600"/><Link to='/account' >Akun saya</Link>
                                <a className="hover:text-blue-600"/><Link to='/setting' >Pengaturan</Link>
                                <a className="hover:text-blue-600"/><Link to='/login' >Keluar</Link>
                            </div>  
                        </div>  
                    </div>  
                </nav>
            </header>
        </>
    )
}

export default Header