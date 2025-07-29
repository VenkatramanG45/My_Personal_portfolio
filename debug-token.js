// Debug script for Netlify token issues
import https from 'https';

const token = process.env.NETLIFY_AUTH_TOKEN;
const siteId = '1adc4bfc-1965-4bc2-936c-b0b257a01b99';

console.log('🔍 Debugging Netlify token...');
console.log(`Token length: ${token ? token.length : 0} characters`);
console.log(`Token starts with: ${token ? token.substring(0, 10) + '...' : 'undefined'}`);
console.log(`Site ID: ${siteId}`);

if (!token) {
    console.error('❌ NETLIFY_AUTH_TOKEN is not set');
    process.exit(1);
}

const options = {
    hostname: 'api.netlify.com',
    path: `/api/v1/sites/${siteId}`,
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
};

console.log('🌐 Making API request...');

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`📡 Response Status: ${res.statusCode}`);
        console.log(`📡 Response Headers:`, res.headers);

        if (res.statusCode === 200) {
            console.log('✅ Token is valid and has access to the site');
            try {
                const site = JSON.parse(data);
                console.log(`Site name: ${site.name}`);
                console.log(`Site URL: ${site.url}`);
            } catch (e) {
                console.log('✅ API call successful but could not parse response');
            }
        } else {
            console.error(`❌ Error: ${res.statusCode}`);
            console.error(`Response: ${data}`);

            if (res.statusCode === 401) {
                console.log('🔑 401 Unauthorized - Token is invalid or expired');
            } else if (res.statusCode === 403) {
                console.log('🚫 403 Forbidden - Token lacks permissions');
            } else if (res.statusCode === 404) {
                console.log('🌐 404 Not Found - Site ID is incorrect');
            }
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Request failed:', error.message);
});

req.end(); 