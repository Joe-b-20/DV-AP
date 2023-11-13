import React, { useState } from 'react';

const DataUploadInterface = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    // Example: Upload file logic goes here
    // Use API calls to upload the file and update progress
    // For demo, we'll just simulate an upload progress

    setUploadStatus('Uploading...');
    for (let progress = 0; progress <= 100; progress += 10) {
      setUploadProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate upload time
    }
    setUploadStatus('Upload successful!');
  };

  return (
    <div>
      <h2>Data Upload</h2>
      <div
        onDrop={handleFileDrop}
        onDragOver={(event) => event.preventDefault()}
        style={{ border: '2px dashed black', padding: '20px', cursor: 'pointer' }}
      >
        Drag and drop your file here or click to select file
      </div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        <p>Upload Progress: {uploadProgress}%</p>
        <p>Status: {uploadStatus}</p>
      </div>
    </div>
  );
};

export default DataUploadInterface;
