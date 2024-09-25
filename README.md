# EXPLACE_RP_Website
A shared repository for the team developing Regionport's website.

# Setup Next.js Project:

### Install Next.js using:
```
npx create-next-app@latest
```

### Navigate to the project directory with:
```
cd next-ts
```

### Initialize the project in the current directory with ..

#### Project Configuration:

Choose **JavaScript**, **ESLint**, **Tailwind CSS**, and **App Router** when prompted.

#### Install additional dependencies:
```
npm install --save-dev prettier prettier-plugin-tailwindcss
```
#### Development Server:

Start the development server with:
```
npm run dev
```
Access it at ***http://localhost:3000***.

#### Basic Setup:

Modify ***page.js*** to include a simple functional component:

```

<div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold">Next.js Starter</h1>
</div>

```

Remove any unnecessary React imports.

#### Tailwind CSS Configuration:

Update **tailwind.config.js** to include custom container settings:
js

```
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
    },
  },
};
```

#### Deployment to Vercel:

Import the GitHub repository into Vercel and deploy.

Deploy and Maintain:

Continuously deploy updates to Vercel to ensure the project remains live and issues are identified early.

