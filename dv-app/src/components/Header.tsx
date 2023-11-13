// Project front-end 
// 1. Home/Dashboard Screen
// Header 

import React, { useState } from 'react';
import DataUploadInterface from './data-upload';
import DataVisualizationInterface from './Visualization'
import DataAnalysisInterface from './Analysis';
import SettingsInterface from './Settings';

const Header: React.FC = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isVisualizationOpen, setIsVisualizationOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleUpload = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsUploadOpen(!isUploadOpen);
  };
  const toggleVisualization = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsVisualizationOpen(!isVisualizationOpen);
  };
  const toggleAnalysis = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAnalysisOpen(!isAnalysisOpen);
  };
  const toggleSettings = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <header>
      <div className="logo">Your Logo Here</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/visualization" onClick={toggleVisualization}>Visualization</a></li>
          <li><a href="/analysis" onClick={toggleAnalysis}>Analysis</a></li>
          <li><a href="/settings" onClick={toggleSettings}>Settings</a></li>
          <li><a href="/upload" onClick={toggleUpload}>Upload</a></li>
          {isUploadOpen && (
            <div style={{ position: '-moz-initial' }}>
              <DataUploadInterface />
            </div>
          )}
          {isVisualizationOpen && (
            <div style={{ position: '-moz-initial' }}>
              <DataVisualizationInterface />
            </div>
          )}
          {isAnalysisOpen && (
            <div style={{ position: '-moz-initial' }}>
              <DataAnalysisInterface />
            </div>
          )}
          {isSettingsOpen && (
            <div style={{ position: '-moz-initial' }}>
              <SettingsInterface />
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;