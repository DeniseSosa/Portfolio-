import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="flex justify-center items-center  hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
            <FaRegCopyright style={{color:"white"}} />
            <h3 className="text-center text-slate-50 text-2xl lg:text-3xl p-2">Made with love</h3>
            <button className="text-3xl">🖤</button>
        </div>
    )
}
export default Footer;