# Netlify Token Troubleshooting

## "Unauthorized: could not retrieve project" Error

This error typically occurs when there are issues with the Netlify authentication token.

### Step 1: Set Up Local Testing Environment

1. **Create .env file** (if not already created):
   ```bash
   node setup-env.js
   ```

2. **Get your Netlify token**:
   - Go to [Netlify User Settings](https://app.netlify.com/user/settings)
   - Navigate to **Applications > Personal access tokens**
   - Click **New access token**
   - Name it "GitHub Actions Deployment"
   - Select these scopes:
     - ✅ `sites:read`
     - ✅ `sites:write`
     - ✅ `deploy:write`
   - Click **Generate token**
   - Copy the token immediately

3. **Update your .env file**:
   - Open the `.env` file in your project
   - Replace `YOUR_ACTUAL_TOKEN` with your real token
   - Save the file

4. **Test the token locally**:
   ```bash
   node test-env.js
   ```

### Step 2: Verify Token Permissions

If the test fails, check your token permissions:

1. Go to [Netlify User Settings](https://app.netlify.com/user/settings)
2. Navigate to **Applications > Personal access tokens**
3. Check if your token has the following scopes:
   - `sites:read`
   - `sites:write`
   - `deploy:write`

### Step 3: Create a New Token (if needed)

If the current token doesn't work:

1. Go to [Netlify User Settings](https://app.netlify.com/user/settings)
2. Navigate to **Applications > Personal access tokens**
3. Click **New access token**
4. Give it a name like "GitHub Actions Deployment"
5. Select these scopes:
   - ✅ `sites:read`
   - ✅ `sites:write`
   - ✅ `deploy:write`
6. Click **Generate token**
7. Copy the token immediately (you won't see it again)

### Step 4: Update GitHub Secret

1. Go to your GitHub repository
2. Navigate to **Settings > Secrets and variables > Actions**
3. Find `NETLIFY_AUTH_TOKEN`
4. Click **Update**
5. Paste the new token
6. Click **Update secret**

### Step 5: Test Locally First

Before pushing to GitHub, test everything locally:

```bash
# 1. Set up environment
node setup-env.js

# 2. Edit .env file with your token

# 3. Test the token
node test-env.js

# 4. Test deployment locally
npm run build
npx netlify-cli deploy --dir=dist --auth=YOUR_TOKEN --site=1adc4bfc-1965-4bc2-936c-b0b257a01b99 --prod
```

### Step 6: Alternative Deployment Method

If the CLI method still fails, try using the Netlify API directly:

```yaml
- name: Deploy to Netlify
  run: |
    # Upload files to Netlify
    curl -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
         -H "Content-Type: application/zip" \
         --data-binary "@dist.zip" \
         "https://api.netlify.com/api/v1/sites/1adc4bfc-1965-4bc2-936c-b0b257a01b99/deploys"
```

### Step 7: Check Site Ownership

Ensure the site belongs to your account:

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Verify you can see the site `quiet-mermaid-b5ffc4`
3. Check that you have admin access to the site

### Common Issues:

1. **Token expired** - Create a new token
2. **Wrong scopes** - Ensure token has `sites:read` and `sites:write`
3. **Site not found** - Verify the site ID is correct
4. **Account mismatch** - Ensure token belongs to the same account as the site

### Testing Locally:

```bash
# Test the deployment locally
npm run build
npx netlify-cli deploy --dir=dist --auth=YOUR_TOKEN --site=1adc4bfc-1965-4bc2-936c-b0b257a01b99 --prod
``` 