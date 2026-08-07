# Getting Started with Flatland

This project was bootstrapped with [Flatland template](https://github.com/bernhardfritz/flatland-template).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the project in development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the project for production to the `dist/` folder.\
It compiles WASM in production mode and optimizes the build for the best performance.

The build is minified and filenames include hashes.\
Your project is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run preview`

Previews the production build locally.\
Open [http://127.0.0.1:4173](http://127.0.0.1:4173) to view it in your browser.

Do not use this as a production server as it's not designed for it.

This command starts a server in the build directory (by default `dist/`).\
Run `npm run build` beforehand to ensure that the build directory is up-to-date.

## Learn More

You can learn more in the [Flatland documentation](https://pkg.go.dev/github.com/bernhardfritz/flatland).

### Deployment

Before you proceed, ensure **GitHub Pages** is enabled on your repository:

1. Go to your repository **Settings**.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment**, set the source to **GitHub Actions**.

For detailed steps, see [Publishing with a custom GitHub Actions Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

To deploy the project to GitHub Pages, simply commit and push your changes:

```bash
git add .
git commit -m "Look mom I did a thing"
git push
```

Once deployed, the project will be available at: `https://<user>.github.io/<repository>`