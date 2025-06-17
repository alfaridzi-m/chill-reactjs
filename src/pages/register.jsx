import BgLogin from "../assets/etc/BG_login.jpg"
import RegiLogin from "../component/register-login/head-regis"
import PasswordInput from "../component/register-login/password-input"
import LoginOption from "../component/register-login/login-option"
import { Link } from "react-router"

const Register = () => {
    return (
        <div style={{ backgroundImage: `url(${BgLogin})` }} className="font-lato bg-cover bg-center flex flex-col flex-wrap justify-center items-center h-svh">
            <main className="w-3/4 max-w-xl bg-[rgba(24,26,28,0.84)] h-fit flex-col flex-wrap p-6 items-center text-center text-white rounded-lg sm:p-10">
                <RegiLogin welcome="Daftar" />

                <div className="flex flex-col mt-5">
                    <form action="./index.html" method="post">
                        <div className="flex flex-col items-baseline">
                                <label htmlFor="username" className="font-medium text-xs sm:text-base">Username</label>
                                <input type="text" placeholder="Masukan username" name="username" className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required /> 
                        </div>
                        <PasswordInput/>
                        <PasswordInput confirm="Konfirmasi"/>
                    </form>
                </div>
                <div className="flex flex-row text-xs justify-between w-full mt-1.5 sm:text-base sm:mt-3">
                    <p className="text-[rgba(193,194,196,1)]">Sudah punya akun? <Link to='/login'><a className="text-white">Masuk</a></Link></p>
                </div>  
                <LoginOption welcome="Daftar"/>
            </main>
        </div>
    )
}
export default Register