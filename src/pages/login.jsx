import React, {useState} from "react"
import BgLogin from "../assets/etc/BG_login.jpg"
import RegiLogin from "../component/head-regis"
import PasswordInput from "../component/password-input"
import Eye from "../assets/icon/eye.png"
import LoginOption from "../component/login-option"


const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${BgLogin})` }} className="font-lato bg-cover bg-center flex flex-col flex-wrap justify-center items-center h-full">
            <main className="w-3/4 md:w-1/3 md:h-2/3 bg-[rgba(24,26,28,0.84)] h-fit flex-col flex-wrap p-6 items-center text-center text-white rounded-lg ">
                <RegiLogin welcome="Masuk" />

                <div className="flex flex-col mt-5">
                    <form action="./index.html" method="post">
                        <div className="flex flex-col items-baseline">
                            <label htmlFor="username" className="font-medium text-xs">Username</label>
                            <input type="text" placeholder="Masukan username" name="username" className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3" required /> 
                        </div>
                        <PasswordInput/>
                    </form>
                </div>
                <div className="flex flex-row text-xs justify-between w-full mt-1.5">
                    <p className="text-[rgba(193,194,196,1)]">Belum punya akun? <a href="#" className="text-white">Daftar</a></p>
                    <a href="./lupa-sandi.html">Lupa kata sandi?</a>
                </div>  
                <LoginOption welcome="Masuk"/>
            </main>
        </div>
    )
}
export default Login