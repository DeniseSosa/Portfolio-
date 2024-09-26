import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    const [isDarkMode, setIsDarkMode]= useState(false)

    const handleColor = () => {
        document.documentElement.classList.toggle("dark")
        setIsDarkMode(isDarkMode=> !isDarkMode)
    }
    return (
        <div className="flex justify-center items-center hover:drop-shadow-[0_10px_15px_rgb(192,38,211)] ">
            <FaRegCopyright style={{ color: isDarkMode ? "white" :  "black"  }} />
            <h3 className="text-center text-slate-900 dark:text-slate-50 text-xl lg:text-2xl p-2">Made with love</h3>
            <button onClick={handleColor} className="text-3xl">
            {
                isDarkMode? "🤍": "🖤"
            }
            </button>
        </div>
    )
}
export default Footer;