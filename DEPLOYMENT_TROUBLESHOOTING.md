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
- Project not linked to Netlify

**Required Environment Variables**:
```
NETLIFY_AUTH_TOKEN=your_netlify_token
```

### 3. Environment Variables Setup

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secret:
   - `NETLIFY_AUTH_TOKEN`

### 4. Getting Netlify Credentials

1. **Auth Token**: 
   - Go to Netlify user settings
   - Navigate to Applications > Personal access tokens
   - Create a new token

2. **Site ID**: 
   - Your site ID is: `1adc4bfc-1965-4bc2-936c-b0b257a01b99`
   - Site URL: `https://quiet-mermaid-b5ffc4.netlify.app`

### 5. Testing Locally

Before pushing to GitHub, test the build locally:
```bash
npm ci
npm run build
```

### 6. Manual Deployment Test

To test deployment manually:
```bash
npm run build
npx netlify-cli deploy --dir=dist --prod
```

### 7. Linking to Netlify

If you need to link your project to Netlify:
```bash
npx netlify-cli link --id 1adc4bfc-1965-4bc2-936c-b0b257a01b99
```

## Still Having Issues?

1. Check GitHub Actions logs for specific error messages
2. Verify the NETLIFY_AUTH_TOKEN is set correctly
3. Ensure your Netlify account has proper permissions
4. Try deploying manually to isolate the issue 