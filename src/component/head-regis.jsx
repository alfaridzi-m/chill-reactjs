import Logo from "../assets/icon/Logo.png"

const RegiLogin = ({welcome}) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <img src={Logo} alt="Logo" className="h-6" />
                <div className="mt-5">
                    <h3 className="text-lg font-bold">{welcome}</h3>
                    <p className="text-xs mt-1">Selamat datang{welcome.toLowerCase() === 'masuk' ? ' lagi' : null}!</p>
                </div> 
            </div>
        </>
    )
}
export default RegiLogin