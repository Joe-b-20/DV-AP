// Project front-end 
// 1. Home/Dashboard Screen
// App

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import awsConfig from './aws-config';

Amplify.configure(awsConfig);
const App: React.FC = () => {
  return (
    <Authenticator loginMechanisms={[ 'username', 'email' ]}>
      {({ signOut, user }) => (
        <Router>
          <div className="App">
            <Header />
            <button onClick={signOut} style={{ position: 'absolute', top: 20, right: 20 }}>
              Sign Out
            </button>
            <div className="content">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add more routes as needed */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;