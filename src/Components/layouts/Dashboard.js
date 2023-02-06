import Cards from "../ComponentsNew/Cards";
import ShortTable from "../ComponentsNew/ShortTable";

const Dashboard = () => {
    return (
        <div>
            <div className="h-20 mx-4 p-6 items-center">
            <h3 className="text-gray-600 font-bold text-2xl">Dashboard</h3>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <ShortTable/>
            </div>
        </div>
    );
}
 
export default Dashboard;