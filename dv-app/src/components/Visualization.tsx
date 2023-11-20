
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataVisualizationInterface = () => {
const [selectedDataset, setSelectedDataset] = useState('');
const [selectedVisualization, setSelectedVisualization] = useState<string | null>(null);
const [visualizationData, setVisualizationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/visualization', {
          params: { dataset: selectedDataset, visualizationType: selectedVisualization }
        });
        setVisualizationData(response.data);
      } catch (error) {
        console.error('Error fetching visualization data:', error);
      }
    };

    if (selectedDataset && selectedVisualization) {
      fetchData();
    }
  }, [selectedDataset, selectedVisualization]);

const handleDatasetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataset(event.target.value);
};

const handleVisualizationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVisualization(event.target.value);
};

  return (
    <div>
      <h2>Data Visualization</h2>
      <div>
        <label>Select Dataset: </label>
        <select onChange={handleDatasetChange}>
          {/* Options for datasets */}
        </select>
      </div>
      <div>
        <label>Select Visualization: </label>
        <select onChange={handleVisualizationChange}>
          {/* Options for visualizations */}
        </select>
      </div>
      <div>
        {/* Display the selected visualization */}
        {visualizationData && <div>{visualizationData}</div>}
      </div>
      <div>
        {/* Options to customize or filter the visualization */}
      </div>
    </div>
  );
};
export default DataVisualizationInterface;