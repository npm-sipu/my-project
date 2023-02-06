const ShortTable = () => {
  return (
    <div className="mt-4">
        <div className="flex justify-between w-1/2 bg-white py-2 px-3">
            <div>
                <h3 className="text-md font-semibold text-blue-600 p-1">Invoice</h3>
            </div>
            <div>
                <h3 className="text-md text-white bg-orange-700 px-2 py-1 rounded hover:bg-orange-500">View More</h3>
            </div>
        </div>
      <table className="w-1/2 bg-white">
        <thead className="bg-gray-200 border-b-2">
          <tr>
            <th className="border-y px-4 py-4 text-gray-500">Order Id</th>
            <th className="border-y px-4 py-4 text-gray-500">Full Name</th>
            <th className="border-y px-4 py-4 text-gray-500">Item</th>
            <th className="border-y px-4 py-4 text-gray-500">Status</th>
            <th className="border-y px-4 py-4 text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-y px-6 py-2 text-blue-600">16</td>
            <td className="border-y px-6 py-2">Jenelle Jersh</td>
            <td className="border-y px-6 py-2">Scallops</td>
            <td className="border-y px-6 py-2"><span className="bg-green-500 p-2 rounded">delivered</span></td>
            <td className="border-y px-6 py-2"><button className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded text-white">Deatils</button></td>
          </tr>
          <tr>
            <td className="border-y px-6 py-2 text-blue-600">10</td>
            <td className="border-y px-6 py-2">Ajit Saha</td>
            <td className="border-y px-6 py-2">Soap</td>
            <td className="border-y px-6 py-2"><span className="bg-lime-400 p-2 rounded">Processing</span></td>
            <td className="border-y px-6 py-2"><button className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded text-white">Deatils</button></td>
          </tr>
          <tr>
            <td className="border-y px-6 py-2 text-blue-600">78</td>
            <td className="border-y px-6 py-2">Rajesh Sahoo</td>
            <td className="border-y px-6 py-2">Deodrants</td>
            <td className="border-y px-6 py-2"><span className="bg-orange-400 p-2 rounded">Pending</span></td>
            <td className="border-y px-6 py-2"><button className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded text-white">Deatils</button></td>
          </tr>
          <tr>
            <td className="border-y px-6 py-2 text-blue-600">79</td>
            <td className="border-y px-6 py-2">Sujit Bhatta</td>
            <td className="border-y px-6 py-2">Towell</td>
            <td className="border-y px-6 py-2"><span className="bg-yellow-300 p-2 rounded">Shipping</span></td>
            <td className="border-y px-6 py-2"><button className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded text-white">Deatils</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShortTable;
