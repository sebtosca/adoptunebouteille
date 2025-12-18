# GitHub Pages Deployment Guide

## Quick Fix Checklist

### 1. Verify GitHub Pages Settings
- Go to your repository on GitHub
- Click **Settings** → **Pages**
- Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
- Save the settings

### 2. Check Deployment Status
- Go to **Actions** tab in your repository
- Look for the latest workflow run
- Ensure it completed successfully (green checkmark)
- If it failed, check the error messages

### 3. Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear cache for the site in browser settings

### 4. Verify URLs
- Root: `https://yourusername.github.io/adoptunebouteille/`
- Product 00001: `https://yourusername.github.io/adoptunebouteille/00001`
- Product 00002: `https://yourusername.github.io/adoptunebouteille/00002`

### 5. Test Locally First
```bash
npm run build
npm run preview
```
Then visit: `http://localhost:4173/adoptunebouteille/`

## Common Issues

### Issue: 404 on all pages
**Solution**: Make sure GitHub Pages is set to use "GitHub Actions" as the source, not a branch.

### Issue: 404 on specific routes (like /00001)
**Solution**: The 404.html file should handle this. Make sure it's being created during build.

### Issue: Assets not loading
**Solution**: Check that the base path in `vite.config.ts` matches your repository name.

## Manual Deployment Trigger

If needed, you can manually trigger a deployment:
1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select the branch (usually `main`)
5. Click **"Run workflow"**

