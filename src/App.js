import Sidebar from "./Components/layouts/Sidebar";
import Home from "./Components/layouts/Home";
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(prevSate=> !prevSate);
  }
  

  return (
    <div className="flex bg-white">
      <Router>
      <div>
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar}/>
      </div>
      <div>
        <Home toggleSidebar={toggleSidebar} openSidebar={openSidebar}/>
      </div>
      </Router>
    </div>
  );
}

export default App;
