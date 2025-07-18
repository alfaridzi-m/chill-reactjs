import BgLogin from "../assets/etc/BG_login.jpg"
import RegiLogin from "../component/register-login/head-regis"
import Google from "../assets/icon/google.webp"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from "axios"

const apiRegister = async (username,password)  => {
    const apiUrl = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/user"
    const getResponse = await axios.get(apiUrl)
    console.log(getResponse.data)
    const isUserTaken = getResponse.data.find(user => user.username === username)
    if (isUserTaken) {
        throw new Error("Username sudah digunakan")
    }
    const newUser = {username,password}
    const addResponse = await axios.post(apiUrl,newUser)
    return addResponse.data
}

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setError("")
        if (confirmPassword !== password) {
            setError("Passwords do not match")
            return;
          }
        setLoading(true)

        try {
            const registeredUser = await apiRegister(username,password)
            localStorage.setItem("isLoggedIn","true")
            localStorage.setItem("currentUser",JSON.stringify(registeredUser))
            navigate('/')
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
        

        }


    return (
        <div style={{ backgroundImage: `url(${BgLogin})` }} className="font-lato bg-cover bg-center flex flex-col flex-wrap justify-center items-center h-svh">
            <main className="w-3/4 max-w-xl bg-[rgba(24,26,28,0.84)] h-fit flex-col flex-wrap p-6 items-center text-center text-white rounded-lg sm:p-10">
                <RegiLogin welcome="Daftar" />
                <div className="flex flex-col mt-5">
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col items-baseline">
                                <label htmlFor="username" className="font-medium text-xs sm:text-base">Username</label>
                                <input type="text" 
                                placeholder="Masukan username" 
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required /> 
                        </div>
                        <div className="flex flex-col items-baseline mt-5 relative">
                            <label htmlFor="password" className="font-medium text-xs sm:text-base">Kata Sandi</label>
                            <input type={showPassword ? "text" : "password"}  placeholder="Masukan kata sandi" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required />
                            <span className="absolute right-2 top-4.5 sm:top-9 sm:right-4 cursor-pointer" onClick={togglePasswordVisibility}><FontAwesomeIcon icon={faEye} className='w-3 md:w-6'/></span>
                        </div>
                          <div className="flex flex-col items-baseline mt-5 relative">
                            <label htmlFor="password" className="font-medium text-xs sm:text-base">Konfirmasi Kata Sandi</label>
                            <input type={showPassword ? "text" : "password"}  placeholder="Masukan kata sandi" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            name="confirmPassword" 
                            className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required />
                            <span className="absolute right-2 top-4.5 sm:top-9 sm:right-4 cursor-pointer" onClick={togglePasswordVisibility}><FontAwesomeIcon icon={faEye} className='w-3 md:w-6'/></span>
                        </div>
                        <div className="flex flex-row text-xs justify-between w-full mt-1.5 sm:text-base sm:mt-3">
                    <p className="text-[rgba(193,194,196,1)]">Sudah punya akun? <Link to='/login' className="text-white">Masuk</Link></p>
                </div>
                {error && <p className="text-red-500">{error} </p>}  
                <button className="mt-5 w-full h-7  bg-[rgba(61,65,66,1)] rounded-xl border-[0.5px] hover:bg-gray-400 border-[rgba(231,227,252,0.23)] text-xs font-semibold cursor-pointer sm:h-12  sm:mt-9 sm:rounded-3xl sm:text-base" type="submit">{loading ? "Memproses . . ." : "Register"}</button>
                <p className="text-[#9D9EA1] text-[10px] mt-1 sm:text-sm sm:mt-2">Atau</p>
                <div className="w-full h-7 flex mt-1 flex-row items-center justify-center text-xs border-[0.5px] border-[rgba(231,227,252,0.23)] rounded-xl gap-1.5 hover:bg-gray-400 sm:h-12 sm:rounded-3xl sm:text-base sm:mt-2">
                    <img src={Google} alt="Google Logo" className="google-icon h-4 w-4 "/>
                    <a href="#" className="font-semibold">Register dengan Google</a>
                </div>
                
                    </form>
                </div>
                
            </main>
        </div>
    )
}
export default Register