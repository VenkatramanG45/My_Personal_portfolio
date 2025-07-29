// Setup script to help create .env file
import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');
const envExample = `# Netlify Authentication Token
# Replace YOUR_ACTUAL_TOKEN with your real Netlify personal access token
# Get your token from: https://app.netlify.com/user/settings/applications
NETLIFY_AUTH_TOKEN=YOUR_ACTUAL_TOKEN

# Site ID for your Netlify site (optional - defaults to your site)
NETLIFY_SITE_ID=1adc4bfc-1965-4bc2-936c-b0b257a01b99

# Instructions:
# 1. Replace YOUR_ACTUAL_TOKEN with your real token
# 2. Run: node test-env.js
# 3. The .env file will be ignored by git for security
`;

console.log('🔧 Setting up environment file for Netlify token testing...\n');

if (fs.existsSync(envPath)) {
    console.log('⚠️  .env file already exists');
    console.log('📁 Current .env file location:', envPath);
    console.log('\n📋 To test your token:');
    console.log('1. Edit the .env file with your actual token');
    console.log('2. Run: node test-env.js');
} else {
    try {
        fs.writeFileSync(envPath, envExample);
        console.log('✅ Created .env file');
        console.log('📁 File location:', envPath);
        console.log('\n📋 Next steps:');
        console.log('1. Edit the .env file and replace YOUR_ACTUAL_TOKEN with your real token');
        console.log('2. Get your token from: https://app.netlify.com/user/settings/applications');
        console.log('3. Run: node test-env.js');
        console.log('\n🔒 Note: .env files are ignored by git for security');
    } catch (error) {
        console.error('❌ Could not create .env file:', error.message);
    }
}

console.log('\n🔗 Get your Netlify token:');
console.log('1. Go to: https://app.netlify.com/user/settings/applications');
console.log('2. Click "New access token"');
console.log('3. Name it "GitHub Actions Deployment"');
console.log('4. Select scopes: sites:read, sites:write, deploy:write');
console.log('5. Copy the token and paste it in your .env file'); 