import Eye from "../assets/icon/eye.png"
const PasswordInput = ({confirm}) => {
    return (
        <>
            <div className="flex flex-col items-baseline mt-5 relative">
                <label htmlFor="password" className="font-medium text-xs">{confirm} Kata Sandi</label>
                <input type="password" placeholder="Masukan kata sandi" name="password" className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3" required />
                <span className="absolute right-2 top-6.5"><img src={Eye} alt="eye"/></span>
            </div>
        </>
    )

}
export default PasswordInput