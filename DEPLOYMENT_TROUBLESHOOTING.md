# Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. Build Failures

**Symptoms**: GitHub Actions build step fails
**Solutions**:
- Ensure all dependencies are properly installed
- Check for deprecated packages (like the crypto package we removed)
- Verify Node.js version compatibility

### 2. Netlify Deployment Failures

**Symptoms**: Build succeeds but deployment fails
**Common Causes**:
- Missing or incorrect environment variables
- Invalid Netlify authentication token
- Incorrect site IDs

**Required Environment Variables**:
```
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID_PRODUCTION=your_production_site_id
NETLIFY_SITE_ID_STAGING=your_staging_site_id
```

### 3. Environment Variables Setup

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID_PRODUCTION`
   - `NETLIFY_SITE_ID_STAGING`

### 4. Getting Netlify Credentials

1. **Auth Token**: 
   - Go to Netlify user settings
   - Navigate to Applications > Personal access tokens
   - Create a new token

2. **Site IDs**:
   - Go to your Netlify dashboard
   - Select your site
   - The site ID is in the URL: `https://app.netlify.com/sites/YOUR_SITE_ID`

### 5. Testing Locally

Before pushing to GitHub, test the build locally:
```bash
npm ci
npm run build
```

### 6. Workflow Debugging

The updated workflows now include:
- Better error logging
- Build output verification
- Updated Node.js version (18)
- Latest GitHub Actions versions

### 7. Manual Deployment Test

To test deployment manually:
```bash
npm run build
npx netlify-cli deploy --dir=dist --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID_PRODUCTION --prod
```

## Still Having Issues?

1. Check GitHub Actions logs for specific error messages
2. Verify all environment variables are set correctly
3. Ensure your Netlify account has proper permissions
4. Try deploying manually to isolate the issue 