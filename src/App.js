import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { history } from './helpers/history';
import Nav from './components/nav';
import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import Login  from './components/Login';
import Layout  from './components/Layout';


function App() {
  // init custom history object to allow navigation from 
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="app-container bg-light">
      <div className="container pt-4 pb-4">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={
            <Layout>
              <Login />
            </Layout>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
