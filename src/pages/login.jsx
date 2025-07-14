import BgLogin from "../assets/etc/BG_login.jpg"
import RegiLogin from "../component/register-login/head-regis"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Google from "../assets/icon/google.webp"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


const Login = () => {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handlelogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = storedUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (matchedUser) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(matchedUser)); // opsional
            navigate("/");
        } else {
            const userExists = storedUsers.some((u) => u.username === username);
            if (userExists) {
            setError("Password salah");
            } else {
            setError("Username belum terdaftar");
            }
        }
        }
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div style={{ backgroundImage: `url(${BgLogin})` }} className="font-lato bg-cover bg-center flex flex-col flex-wrap justify-center items-center h-svh">
            <main className="w-3/4 max-w-xl bg-[rgba(24,26,28,0.84)] h-fit flex-col flex-wrap p-6 items-center text-center text-white rounded-lg sm:p-10">
                <RegiLogin welcome="Masuk" />

                <div className="flex flex-col mt-5">
                    <form onSubmit={handlelogin}>
                        <div className="flex flex-col items-baseline">
                            <label htmlFor="username" className="font-medium text-xs sm:text-base">Username</label>
                            <input 
                            type="text" 
                            placeholder="Masukan username" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required /> 
                        </div>
                        <div className="flex flex-col items-baseline mt-5 relative">
                            <label htmlFor="password" className="font-medium text-xs sm:text-base">{confirm} Kata Sandi</label>
                            <input type={showPassword ? "text" : "password"}  
                            placeholder="Masukan kata sandi" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" 
                            className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required />
                            <span className="absolute right-2 top-4.5 sm:top-9 sm:right-4 cursor-pointer" onClick={togglePasswordVisibility}><FontAwesomeIcon icon={faEye} className='w-3 md:w-6'/></span>
                        </div>
                        <div className="flex flex-row text-xs justify-between w-full mt-1.5 sm:text-base sm:mt-3">
                            <p className="text-[rgba(193,194,196,1)]">Belum punya akun? <Link to='/register'><a className="text-white">Daftar</a></Link></p>
                            <Link to='/lupapassowrd'><p>Lupa kata sandi?</p></Link>
                        </div>  
                <button className="mt-5 w-full h-7  bg-[rgba(61,65,66,1)] rounded-xl border-[0.5px] hover:bg-gray-400 border-[rgba(231,227,252,0.23)] text-xs font-semibold cursor-pointer sm:h-12  sm:mt-9 sm:rounded-3xl sm:text-base" type="submit">Masuk</button>
                <p className="text-[#9D9EA1] text-[10px] mt-1 sm:text-sm sm:mt-2">Atau</p>
                <div className="w-full h-7 flex mt-1 flex-row items-center justify-center text-xs border-[0.5px] border-[rgba(231,227,252,0.23)] rounded-xl gap-1.5 hover:bg-gray-400 sm:h-12 sm:rounded-3xl sm:text-base sm:mt-2">
                    <img src={Google} alt="Google Logo" className="google-icon h-4 w-4 "/>
                    <a href="#" className="font-semibold">Masuk dengan Google</a>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </div>
            </main>
        </div>
    )
}
export default Login