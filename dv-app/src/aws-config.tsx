import { Amplify } from 'aws-amplify';

const awsConfig = {
  Auth: {
    identityPoolId: 'us-east-1:a725474f-912a-4cd9-92c6-1e6dfb230b9c',
    region: 'us-east-1',
    userPoolId: 'us-east-1_jXwAvabEN',
    userPoolWebClientId: '4ritmbhr9rspelkb08pmai0gpj',
  },
  API: {
    endpoints: [
      {
        name: 'DataUploadAPI',
        endpoint: 'https://example.com/upload',
        region: 'us-east-1'
      },
      {
        name: 'DataVisualizationAPI',
        endpoint: 'https://example.com/visualization',
        region: 'us-east-1'
      }
    ]
  }
  // Add other AWS configurations if needed
};

Amplify.configure(awsConfig);

export default awsConfig;

