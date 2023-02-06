const Table = () => {

    let rows = [{"id":1,"fullName":"Jenelle Jersh","item":"Scallops - U - 10","status":"delivered"},
    {"id":2,"fullName":"Hynda Corss","item":"Soap - Mr.clean Floor Soap","status":"processing"},
    {"id":3,"fullName":"Chaddie Winston","item":"Pepper - Chili Powder","status":"shipping"},
    {"id":4,"fullName":"Bink Cluff","item":"Apple - Granny Smith","status":"delivered"},
    {"id":5,"fullName":"Armand Merrell","item":"Cheese - Cottage Cheese","status":"pending"},
    {"id":6,"fullName":"Jenelle Jersh","item":"Scallops - U - 10","status":"delivered"},
    {"id":7,"fullName":"Hynda Corss","item":"Soap - Mr.clean Floor Soap","status":"processing"},
    {"id":8,"fullName":"Chaddie Winston","item":"Pepper - Chili Powder","status":"shipping"},
    {"id":9,"fullName":"Bink Cluff","item":"Apple - Granny Smith","status":"delivered"},
    {"id":10,"fullName":"Armand Merrell","item":"Cheese - Cottage Cheese","status":"pending"}];

    return (
        <div className="h-screen w-screen mt-10">
            <div className="h-10 mx-4 p-2 items-center">
            <h3 className="text-gray-600 font-bold text-2xl">Data Tables</h3>
            </div>
            <table className="whitespace-nowrap bg-white h-32 w-full shadow-md mx-4">
               <thead>
                <tr className="text-left font-bold bg-gray-300">
                    <th className="border-y px-6 py-4">Order Id</th>
                    <th className="border-y px-6 py-4">Full Name</th>
                    <th className="border-y px-6 py-4">Item</th>
                    <th className="border-y px-6 py-4">Status</th>
                    <th className="border-y px-6 py-4">Action</th>
                </tr>
               </thead>
               <tbody>
                {rows.map(row => <tr>
                <td className="border-y px-6 py-4">{row.id}</td>
                <td className="border-y px-6 py-4">{row.fullName}</td>
                <td className="border-y px-6 py-4">{row.item}</td>
                <td className="border-y px-6 py-4">{row.status}</td>
                <td className="border-y px-6 py-4"><button className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded">Details</button></td>
                </tr>)}
               </tbody>
        </table>
        </div>
    );
}
 
export default Table;