// Test script to verify Netlify token with environment file support
import https from 'https';
import fs from 'fs';
import path from 'path';

// Try to load .env file if it exists
function loadEnvFile() {
    try {
        const envPath = path.join(process.cwd(), '.env');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            const lines = envContent.split('\n');

            lines.forEach(line => {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#')) {
                    const [key, value] = trimmed.split('=');
                    if (key && value) {
                        process.env[key.trim()] = value.trim();
                    }
                }
            });
            console.log('✅ Loaded .env file');
        } else {
            console.log('⚠️  No .env file found. Please create one with your token.');
            console.log('Example .env file:');
            console.log('NETLIFY_AUTH_TOKEN=your_actual_token_here');
        }
    } catch (error) {
        console.log('⚠️  Could not load .env file:', error.message);
    }
}

// Load environment variables
loadEnvFile();

const token = process.env.NETLIFY_AUTH_TOKEN;
const siteId = process.env.NETLIFY_SITE_ID || '1adc4bfc-1965-4bc2-936c-b0b257a01b99';

if (!token) {
    console.error('❌ NETLIFY_AUTH_TOKEN is not set');
    console.log('\n📋 To set up your token:');
    console.log('1. Create a .env file in this directory');
    console.log('2. Add: NETLIFY_AUTH_TOKEN=your_actual_token');
    console.log('3. Run this script again');
    console.log('\n🔗 Get your token from: https://app.netlify.com/user/settings/applications');
    process.exit(1);
}

console.log('🔍 Testing Netlify token...');
console.log(`Site ID: ${siteId}`);

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
            console.log(`Site ID: ${site.id}`);
        } else {
            console.error(`❌ Error: ${res.statusCode} - ${data}`);
            if (res.statusCode === 401) {
                console.log('🔑 This usually means the token is invalid or expired');
                console.log('💡 Try creating a new token with proper permissions');
            } else if (res.statusCode === 404) {
                console.log('🌐 This usually means the site ID is incorrect');
            }
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Request failed:', error.message);
});

req.end(); 