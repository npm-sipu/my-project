import { Link } from "react-router-dom";

//onClick={() => setOpen(!open)}
const Sidebar = ({ openSidebar, toggleSidebar }) => {


    return (
        <div className={`${openSidebar ?"w-60" : "hidden"} flex flex-col h-screen duration-300 bg-white ${openSidebar ?"fixed" : "relative"}`}>
            <div className="flex justify-center items-center h-20 bg-secondary-col p-2">
            <h1 className="flex justify-center font-bold text-2xl items-center text-white" onClick={toggleSidebar}>Dashboard</h1>
            </div>
            <div>
                <h3 className="mx-6 my-4 font-bold text-gray-500 text-2xl">Features</h3>
                <ul className="mx-8 space-y-4 font-semibold text-gray-500 text-md">
                    <li className="hover:bg-gray-200 px-2 py-1 rounded"><Link to="/">Dashboard</Link></li>
                    <li className="hover:bg-gray-200 px-2 py-1 rounded"><Link to="/table">Tables</Link></li>
                    <li className="hover:bg-gray-200 px-2 py-1 rounded"><Link to="/form">Forms</Link></li>
                    <li className="hover:bg-gray-200 px-2 py-1 rounded">UI Colors</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;