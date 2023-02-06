const Form = () => {
  return (
    <div>
      <div>
        <form className="h-full w-1/2 px-4 mx-auto space-y-6 bg-gray-200 rounded">
          <h3 className="text-3xl font-semibold">Basic Info</h3>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="mr-4">First Name</label>
              <input
                placeholder="first name"
                className="p-1 border border-gray-400 mr-4 rounded block w-full focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="w-1/2">
              <label className="mr-4">Last Name</label>
              <input
                placeholder="last name"
                className="p-1 border border-gray-400 mr-4 rounded block w-full focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="mr-4">Mobile No.</label>
              <input
                placeholder="mobile no"
                className="p-1 border border-gray-400 mr-4 rounded block w-full focus:outline-none focus:border-teal-500"
                type="number"
              />
            </div>

            <div className="w-1/2">
              <label className="mr-4">Email Address</label>
              <input
                placeholder="email address"
                className="p-1 border border-gray-400 mr-4 rounded block w-full focus:outline-none focus:border-teal-500"
                type="email"
              />
            </div>
          </div>

          <div>
            <label className="mr-4">Gender</label>
            <select className="p-1 rounded border border-gray-400 block w-full">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label>Date of Birth</label>
              <input
                placeholder="D.O.B"
                className="p-1 border border-gray-400 rounded block w-full"
                type="date"
              />
            </div>
            <div className="w-1/2">
              <label>Year</label>
              <input
                placeholder="year"
                className="p-1 border border-gray-400 rounded block w-full"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
