import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Form from './Form';
import Navbar from './Navbar';
import Table from './Table';

const Home = ({toggleSidebar, openSidebar}) => {
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} openSidebar={openSidebar}/>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                <Route exact path="/table">
                    <Table/>
                </Route>
                <Route exact path="/form">
                    <Form/>
                </Route>
            </Switch>
        </>
    );
}
 
export default Home;