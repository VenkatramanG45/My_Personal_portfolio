# GitHub Secrets Verification Guide

## Required Secrets

You need to set up these secrets in your GitHub repository:

### 1. NETLIFY_AUTH_TOKEN
- **Value**: Your Netlify personal access token
- **Get it from**: https://app.netlify.com/user/settings/applications
- **Required scopes**: `sites:read`, `sites:write`, `deploy:write`

### 2. NETLIFY_SITE_ID
- **Value**: `1adc4bfc-1965-4bc2-936c-b0b257a01b99`
- **This is your site ID**

## How to Set Up Secrets

1. Go to your GitHub repository
2. Navigate to **Settings > Secrets and variables > Actions**
3. Click **New repository secret**
4. Add each secret:

### For NETLIFY_AUTH_TOKEN:
- **Name**: `NETLIFY_AUTH_TOKEN`
- **Value**: Your Netlify token (e.g., `nfp_X7TGpJfiQPmvdAHW1aeRvVZgWPqVicSqf6c4`)

### For NETLIFY_SITE_ID:
- **Name**: `NETLIFY_SITE_ID`
- **Value**: `1adc4bfc-1965-4bc2-936c-b0b257a01b99`

## Testing Your Setup

After setting up the secrets:

1. **Push a change** to your main branch
2. **Check GitHub Actions** tab
3. **Look for the deployment workflow**
4. **Check the logs** for any errors

## Troubleshooting

### If you see "Unauthorized" errors:
1. Verify your token has the right permissions
2. Make sure the token is not expired
3. Check that the site ID is correct

### If you see "Site not found" errors:
1. Verify the site ID is correct
2. Make sure the site belongs to your account

### If the workflow doesn't trigger:
1. Check that the workflow files are in `.github/workflows/`
2. Verify the branch name is `main`
3. Check that the YAML syntax is correct

## Current Configuration

Your workflows are now using:
- ✅ **Official Netlify Action** (`nwtgck/actions-netlify@v3.0`)
- ✅ **Node.js 20** for better compatibility
- ✅ **Proper environment variables**
- ✅ **Separate workflows** for production and PR deployments 