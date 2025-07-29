// Test script to verify Netlify token
import https from 'https';

const token = process.env.NETLIFY_AUTH_TOKEN;
const siteId = '1adc4bfc-1965-4bc2-936c-b0b257a01b99';

if (!token) {
    console.error('NETLIFY_AUTH_TOKEN is not set');
    console.log('Please set the environment variable: export NETLIFY_AUTH_TOKEN=your_token');
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

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('✅ Token is valid and has access to the site');
            const site = JSON.parse(data);
            console.log(`Site name: ${site.name}`);
            console.log(`Site URL: ${site.url}`);
        } else {
            console.error(`❌ Error: ${res.statusCode} - ${data}`);
            if (res.statusCode === 401) {
                console.log('This usually means the token is invalid or expired');
            } else if (res.statusCode === 404) {
                console.log('This usually means the site ID is incorrect');
            }
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Request failed:', error.message);
});

req.end(); 