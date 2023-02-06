import { FaBars } from "react-icons/fa";
import { MdNotificationsActive, MdMenuOpen } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";


const Navbar = ({ toggleSidebar, openSidebar }) => {

    return (
        <div className={`${!openSidebar ?"w-screen": "w-screen"} h-20 bg-primary-col flex justify-between item-center`}>
            <div className="flex m-5">
            <FaBars size='2rem' color="#f3f3f3" onClick={toggleSidebar}/>
            </div>
            <div className="flex justify-between item-center m-5">
                <div className="mx-2 flex justify-center items-center"><MdNotificationsActive size='2rem' color="#f3f3f3"/></div>
                <div className="mx-2 flex justify-center items-center"><MdMenuOpen size='2rem' color="#f3f3f3"/></div>
                <div className="mx-2 flex justify-center items-center"><TbMinusVertical size='2rem' color="#f3f3f3"/></div>
                <div className="mx-2 flex justify-center items-center px-4"><CgProfile size='2rem' color="#f3f3f3"/><span className="mx-3 text-white font-semibold">Sujit Bhatt</span></div>
            </div>
        </div>
    );
}
 
export default Navbar;