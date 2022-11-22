# Micro frontend
The main purpose of this project is to demonstrate how to divide a monolithic app into multiple sub-apps.<br>
It's a demo project, that demonstrates the main concept, not a production ready solution from the product standpoint.

## Getting started

### Prerequisites
1. Install **Node.js** which includes **Node Package Manager**.

### Setting Up a Project
For running the full **MFE app**, run the following commands in each package directory (**Container**, **Auth**, **Home** and **Dashboard**):
1. Install dependencies:
```
npm install
```
2. Run the application:
```
npm start
```
3. Open the app in your browser:
```
localhost:8080
```

For running a separate package (**Container** package can't be run separately because it depends on other packages):
1. Navigate to the package directory:
```
cd [PACKAGE NAME]
```
2. Install dependencies:
```
npm install
```
3. Run the application:
```
npm start
```
4. Open the package in your browser:
```
localhost:8081 // Home
localhost:8082 // Auth
localhost:8083 // Dashboard
```

### Packages
This is a monorepo which contains the following packages:
1. **Container** - the root of the MFE app. It's a layout of the app, that displayes header and various packages, based on the activated route.
2. **Auth** - resposible for authenticating users.
3. **Home** - the welcome page, where any user can be navigated.
4. **Dashboard** - user-specific dashboards, hence only authenticated users can navigate here.

### Architecture
The core of this implementation is **Webpack Module Federation**.

When user opens the web site, the **Container** package is displayed. It consists of the Header on the top and placeholders for other packages, that are displayed based on the activated route:
1. `/` - **Home** package is displayed. Welcome page.
2. `/auth` - **Auth** package is displayed. Login page is opened, where user can either log in, or navigate to the Sign Up page. User is navigated to the `/dashboard` page after authentication.
3. `/dashboard` - if user is already authenticated - **Dashboard** package is activated. Otherwise, user is redirected to the `/auth` page.

### Deployment
1. **GitHub Actions** is used for deploying an app.
2. Built app is deployed to the **AWS S3**, where it's served via **AWS CloudFront**.