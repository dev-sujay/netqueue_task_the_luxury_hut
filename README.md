# 🛋️ The Luxury Hut - Modern E-Commerce Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

A sophisticated e-commerce platform built with modern web technologies, featuring seamless API integration, beautiful UI components, and an intuitive shopping experience.

## ✨ Features

- 🛒 Cart management with Context API
- 🌐 Product browsing with filters
- 🔍 Intelligent search functionality
- 📱 Responsive mobile-first design
- 💅 Styled with Tailwind CSS + ShadCN components
- 🚀 Blazing-fast Vite build system
- 📦 API integration with Axios interceptors
- 🍞 Toast notification system

## 🚀 Getting Started

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x

### Installation
1. Clone the repository:
```bash
git clone https://github.com/dev-sujay/netqueue_task_the_luxury_hut.git
```
2. Install dependencies:
```bash
cd netqueue_task_the_luxury_hut && npm install
```
3. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure
```
public/
src/
├── api/
│   ├── axiosInstance.ts    # Axios configuration
│   └── productApi.ts       # Product API services
├── assets/
├── components/
│   └── ui/                 # ShadCN components
│       ├── CartSidebar.tsx
│       ├── ProductGrid.tsx
│       └── ... (20+ components)
├── context/                # State management
│   ├── CartContext.ts
│   └── ProductsContext.ts
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── ProductDetails.tsx  # Single product view
│   └── NotFound.tsx        # 404 page
```

## 🌐 API Integration
The project uses a robust API layer with:

- **Axios Instance** - Base configuration in `axiosInstance.ts`:
```ts
// Create Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Optional: Add Auth Tokens)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
```
- **Product API Service** - Handles all product-related API calls in `productApi.ts`

## 🖥️ Pages Overview

### 🏠 Home Page (`/`)
- Hero section with immersive visuals
- Product grid with filtering capabilities
- Instagram integration section
- Social connectivity features

```tsx
<main>
  <HeroSection />
  <FilterNav />
  <ProductGrid />
  <InstagramSection />
  <SocialConnect />
  <FeaturesSection />
</main>
```

### 📦 Product Details Page (`/product/:id`)
- High-resolution product images
- Detailed specifications
- Add to cart functionality
- Related products carousel

### ❌ 404 Page
- Elegant not-found state
- Navigation back to the homepage

## 🛠️ Technologies Used
- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS + ShadCN UI
- **State Management**: React Context API
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **UI Components**: Radix UI Primitives

## 🌈 Theming & Styling
The project uses Tailwind


## 🤝 Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

**Happy Shopping!** 🎉 Built with ❤️ using cutting-edge web technologies.

