# GitHub Pages Deployment Guide

This guide will help you deploy your CI4SE 2025 conference website to GitHub Pages.

## Prerequisites

- Your code is already synced to GitHub (which you mentioned it is)
- You have admin access to the repository

## Deployment Steps

### Option 1: Using GitHub Actions (Recommended)

1. **Create GitHub Actions Workflow**
   
   Create a file `.github/workflows/deploy.yml` in your repository with this content:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]  # Change to 'master' if that's your default branch
     workflow_dispatch:

   permissions:
   contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v3
   ```

2. **Enable GitHub Pages in Repository Settings**
   
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Save the changes

3. **Update Vite Configuration**
   
   Update your `vite.config.ts` to include the base path:

   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react-swc";
   import path from "path";
   import { componentTagger } from "lovable-tagger";

   export default defineConfig(({ mode }) => ({
     base: '/REPO_NAME/',  // Replace REPO_NAME with your actual repository name
     server: {
       host: "::",
       port: 8080,
     },
     plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   }));
   ```

4. **Commit and Push**
   
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

5. **Wait for Deployment**
   
   - Go to the **Actions** tab in your repository
   - Watch the workflow run
   - Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**
   
   Add this to the "scripts" section:
   ```json
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to **Settings** → **Pages**
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/ (root)**
   - Save

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file named `CNAME` in the `public` folder with your domain:
   ```
   ci4se2025.yourdomain.com
   ```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub Settings → Pages → Custom domain, enter your domain

## Troubleshooting

**Issue: 404 errors on routes**
- GitHub Pages doesn't support client-side routing by default
- Add a `404.html` that redirects to `index.html`

**Issue: Assets not loading**
- Make sure `base` in `vite.config.ts` matches your repository name
- Check that all asset imports use relative paths

**Issue: Build fails**
- Check the Actions log for specific errors
- Ensure all dependencies are in `package.json`
- Test the build locally first with `npm run build`

## Next Steps

Once deployed, you can:
- Share the URL with your team
- Connect a custom domain
- Update content by simply pushing to the main branch

Your website will automatically rebuild and redeploy on every push to the main branch!
