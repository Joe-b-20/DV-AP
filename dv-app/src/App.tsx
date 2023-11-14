// Project front-end 
// 1. Home/Dashboard Screen
// App
// Need to create a new user pool in AWS Cognito with the following attributes:
// Username and password only
// Also need to iron out routing issues and some final styling
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


// Remove this line since Amplify is already imported in the code above
// import Amplify from 'aws-amplify';

(Amplify as any).configure({
  Auth: {
    identityPoolId: 'us-east-1:127e178d-027e-44d4-903a-bdca1056ccda',
    region: 'us-east-1',
    userPoolId: 'us-east-1_zQCcXYyjk',
    userPoolWebClientId: '89vkmtl2nbophitb31b3q6tlt',
    mandatorySignIn: false,
  },
});

  


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
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
  );
}

export default withAuthenticator(App);
