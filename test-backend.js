const https = require('https');
const querystring = require('querystring');

// Test data for the sign up form
const testData = {
  'Timestamp': new Date().toISOString(),
  'Name': 'Test User',
  'Email': 'test@example.com',
  'Team': 'Test Team',
  'Division': 'Division I (Competitive)'
};

// Google Apps Script URL
const scriptUrl = 'https://script.google.com/macros/s/AKfycbwQbfoxpRKqfPVfZFvoWA2JLTV-SzvLyGSR2JFaZcgeSWTeos8b0dw6XlD0qX8pZZxT7Q/exec';

console.log('🧪 Testing Project Hoops Sign Up Form Backend');
console.log('=============================================\n');

console.log('📋 Test Data:');
console.log(JSON.stringify(testData, null, 2));
console.log('\n🔗 Backend URL:');
console.log(scriptUrl);
console.log('\n⏳ Testing connection...\n');

// Convert data to URLSearchParams format
const postData = querystring.stringify(testData);

const options = {
  hostname: 'script.google.com',
  path: '/macros/s/AKfycbwQbfoxpRKqfPVfZFvoWA2JLTV-SzvLyGSR2JFaZcgeSWTeos8b0dw6XlD0qX8pZZxT7Q/exec',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'User-Agent': 'Project-Hoops-Test/1.0'
  }
};

const req = https.request(options, (res) => {
  console.log(`📡 Response Status: ${res.statusCode}`);
  console.log(`📡 Response Headers:`, res.headers);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('\n📄 Response Body:');
    console.log(data);
    
    if (res.statusCode === 200) {
      console.log('\n✅ Backend is responding successfully!');
      console.log('The Google Apps Script is working and accepting requests.');
    } else {
      console.log('\n⚠️  Backend responded with non-200 status code.');
      console.log('This might indicate an issue with the script configuration.');
    }
  });
});

req.on('error', (error) => {
  console.error('\n❌ Error testing backend:');
  console.error(error.message);
  console.log('\n🔧 Troubleshooting tips:');
  console.log('1. Check if the Google Apps Script is deployed');
  console.log('2. Verify the script URL is correct');
  console.log('3. Ensure the script has proper permissions');
  console.log('4. Check if the connected Google Sheet exists and is accessible');
});

req.write(postData);
req.end();

console.log('📤 Sending test request...\n'); 