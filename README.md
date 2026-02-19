#💚 Healty App – Modern Health Application

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/tailwindcss.svg" width="50" />
  <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/favicon.ico" width="50" />
</p>

#
This application is a frontend implementation for the needs of **Technical Test** Frontend Developers at **PT Data Integrasi Inovasi**.

## 🚀 Tech Stack

- **Next.js 16** – React framework with App Router & SSR support
- **React 19** – UI library
- **TypeScript** – Static type checking
- **Tailwind CSS 4** – Utility-first CSS framework
- **shadcn/ui** – Reusable & accessible UI components
- **Radix UI** – Accessible component primitives
- **Zustand** – Lightweight state management
- **React Hook Form** – Performant form handling
- **Zod** – Schema validation
- **Lucide React** – Icon library

## 📦 Installation

```
# Clone the repository
git clone https://github.com/radenmasabdul/healty-app.git
cd healty-app

# Install dependencies
npm install
```

## 🛠️ Development

```
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Run linting
npm run lint
```

## 📁 Project Structure

```
.
├── .next/              # Build output & cache Next.js
├── app/                # Next.js App Router
│   ├── (auth)/         # Auth routes (grouped)
│   ├── (dashboard)/    # Dashboard pages
│   ├── favicon.ico     # Application favicon
│   ├── global.css      # Global CSS
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── global/         # Reusable component global
│   ├── ui/             # Shadcn/ui components
│   └── layout/         # Navbar, sidebar, etc
├── features/           # Feature-based business logic
│   ├── auth/           # Authentication feature logic
│   ├── dashboard/      # Dashboard feature logic
│   ├── pasien/         # Pasien feature logic
├── hooks/              # Custom React hooks
├── lib/                # Utilities & helpers
├── node_modules        # Installed dependencies
├── public/             # Static assets
├── store/              # Zustand state management
├── .gitignore          # Git ignored files
├── components.json     # Shadcn/ui configuration
├── eslint.config.mjs   # ESLint configuration
├── next-env.d.ts       # Next.js TypeScript types
├── next.config.ts      # Next.js config
├── package-lock.json   # pm lockfile
├── package.json        # Project metadata & scripts
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Project documentation
├── tsconfig.json       # TypeScript configuration

```

## 🎯 Features

- Built with **Next.js 16 (App Router)** and **React 19**
- Type-safe development using **TypeScript**
- Modern & responsive UI with **Tailwind CSS**
- Reusable components powered by **shadcn/ui** and **Radix UI**
- Global state management using **Zustand**
- Form handling & validation with **React Hook Form** and **Zod**
- Icon system using **Lucide React**
- Linting setup with **ESLint** for code quality

## 🔧 Configuration

The project includes:
- TypeScript configuration (`tsconfig.json`)
- ESLint configuration (`eslint.config.mjs`)
- Next.js configuration (`next.config.ts`)
- Tailwind CSS configuration (`tailwind.config.ts`)
- PostCSS configuration (`postcss.config.mjs`)
- shadcn/ui components configuration (`components.json`)

## 📱 Browser Support

This application supports all modern browsers that support **ES2015+**.

## 📄 License

This project is **private** and not licensed for public use.
