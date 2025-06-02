import Logo from "../../assets/icon/Logo.png"

const RegiLogin = ({welcome}) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <img src={Logo} alt="Logo" className="h-6 sm:h-11" />
                <div className="mt-5">
                    <h3 className="text-lg font-bold sm:text-3xl">{welcome}</h3>
                    <p className="text-xs mt-1 sm:text-base">Selamat datang{welcome.toLowerCase() === 'masuk' ? ' kembali' : null}!</p>
                </div> 
            </div>
        </>
    )
}
export default RegiLogin