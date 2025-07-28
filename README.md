# React Portfolio

A modern React portfolio built with Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to Netlify via GitHub Actions.

### Required Environment Variables

Make sure these secrets are set in your GitHub repository:

- `NETLIFY_AUTH_TOKEN` - Your Netlify authentication token
- `NETLIFY_SITE_ID_PRODUCTION` - Your production site ID
- `NETLIFY_SITE_ID_STAGING` - Your staging site ID (for PR deployments)

### Deployment Workflows

- **Production**: Automatically deploys when code is pushed to the `main` branch
- **Staging**: Automatically deploys when a pull request is created against the `main` branch

## Technologies

- React 19
- Vite
- GitHub Actions
- Netlify


