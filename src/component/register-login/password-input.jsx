import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const PasswordInput = ({confirm}) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <div className="flex flex-col items-baseline mt-5 relative">
                <label htmlFor="password" className="font-medium text-xs sm:text-base">{confirm} Kata Sandi</label>
                <input type={showPassword ? "text" : "password"}  placeholder="Masukan kata sandi" name="password" className="border-[0.5px] border-[rgba(231,227,252,0.23)] w-full h-7 rounded-xl text-xs pl-3 sm:text-base sm:h-12 sm:rounded-3xl" required />
                <span className="absolute right-2 top-4.5 sm:top-9 sm:right-4 cursor-pointer" onClick={togglePasswordVisibility}><FontAwesomeIcon icon={faEye} className='w-3 md:w-6'/></span>
            </div>
        </>
    )

}
export default PasswordInput