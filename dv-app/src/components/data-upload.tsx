import React, { useState } from 'react';
import axios from 'axios';


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
    const formadata = new FormData();
    formadata.append('file', selectedFile);

    try {
      setUploadStatus('Uploading...');
      const response = await axios({
        method: 'post',
        url: '/upload',
        data: formadata,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        },
      });

      if (response.status === 200) {
        setUploadStatus('Upload successful!');
      } else {
        setUploadStatus('Upload failed.');
      }
    } catch (error) {
      setUploadStatus('Upload failed.');
      console.error('Upload error:', error);
    }
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

