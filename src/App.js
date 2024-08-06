import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import PanelPage from './pages/PanelPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 bg-gray-800 text-white flex justify-around">
          <Link to="/admin">Admin</Link>
          <Link to="/user">User</Link>
          <Link to="/panel">Panel</Link>
        </nav>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/panel" component={PanelPage} />
          <Route path="/" exact>
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to the Question-Answer Site</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
