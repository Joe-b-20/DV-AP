// Project front-end 
// 1. Home/Dashboard Screen
// App

import './App.css';
import React from 'react';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import DataUploadInterface from './components/data-upload';

const App = () => {
  return (
    <div className="App">
      <Header />
        <DataUploadInterface />
      <div className="content">
        <Sidebar />
        <MainArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;
