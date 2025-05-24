import Google from "../assets/icon/google.webp"
const LoginOption = ({welcome}) => {
    return (
        <>
        <button className="mt-5 w-full h-7 bg-[rgba(61,65,66,1)] rounded-xl border-[0.5px] hover:bg-gray-400 border-[rgba(231,227,252,0.23)] text-xs font-semibold cursor-pointer" type="submit">{welcome}</button>
        <p className="text-[#9D9EA1] text-[10px] mt-1">Atau</p>
        <div className="w-full h-7 flex mt-1 flex-row items-center justify-center text-xs border-[0.5px] border-[rgba(231,227,252,0.23)] rounded-xl gap-1.5 hover:bg-gray-400">
            <img src={Google} alt="Google Logo" className="google-icon h-4 w-4"/>
            <a href="#" className="font-semibold">{welcome} dengan Google</a>
        </div>
        </>
    )
}

export default LoginOption