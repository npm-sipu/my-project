import { BsArrowUp,BsArrowDown, BsFillBagFill, BsFillCartFill } from "react-icons/bs";
import { FcBriefcase, FcComments, FcPortraitMode } from "react-icons/fc";

const Cards = () => {
    return (
        <div>
            <div className="flex justify-between mx-4">
                <div className="flex justify-between h-20 w-72 bg-white py-2 px-4 rounded shadow-md">
                    <div>
                        <h3 className="text-xs">EARNINGS (MONTHLY)</h3>
                        <p className="text-xl">$40,000</p>
                        <p className="text-xs flex"><span className="text-green flex"><BsArrowUp color="green"/>3.48%</span> Since last month</p>
                    </div>
                    <div className="my-auto">
                    <FcBriefcase size="2rem"/>
                    </div>
                </div>
                <div className="flex justify-between h-20 w-72 bg-white py-2 px-4 rounded shadow-md">
                    <div>
                        <h3 className="text-xs">SALES</h3>
                        <p className="text-xl">650</p>
                        <p className="text-xs flex"><span className="text-green flex"><BsArrowUp color="green"/>12% </span>Since last month</p>
                    </div>
                    <div className="my-auto">
                    <BsFillCartFill color="green" size="2rem"/>
                    </div>
                </div>
                <div className="flex justify-between h-20 w-72 bg-white py-2 px-4 rounded shadow-md">
                    <div >
                        <h3 className="text-xs">NEW USERS</h3>
                        <p className="text-xl">366</p>
                        <p className="text-xs flex"><span className="text-green flex"><BsArrowUp color="green"/>20.4% </span>Since last month</p>
                    </div>
                    <div className="my-auto">
                        <FcPortraitMode color="blue" size="2rem"/>
                    </div>
                </div>
               <div className="flex justify-between h-20 w-72 bg-white py-2 px-4 rounded shadow-md">
                    <div>
                        <h3 className="text-xs">PENDING REQUESTS</h3>
                        <p className="text-xl">366</p>
                        <p className="text-xs flex"><span className="text-green flex"><BsArrowDown color="red"/>1.10%</span>Since Yesterday</p>
                    </div>
                    <div className="my-auto">
                    <FcComments size="2rem"/>
                    </div>
               </div>
            </div>
        </div>
    );
}
 
export default Cards;