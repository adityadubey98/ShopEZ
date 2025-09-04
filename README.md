# 🛍️ ShopEZ E-Commerce Platform

ShopEZ is a modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js) and Vite. It features a complete customer-facing storefront and a secure seller dashboard for managing products and orders.

**Live Demo:** [https://shop-ez-zeta.vercel.app/](https://shop-ez-zeta.vercel.app/)

---

## ✨ Features

### Customer Features
* **Product Browsing:** Clean and intuitive interface to view all available products.
* **Shopping Cart:** Fully functional cart to add, manage, and update product quantities.
* **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
* **Order Placement:** A streamlined checkout process (easily extendable with a payment gateway).

### Seller/Admin Features
* **Secure Dashboard:** Separate, protected login for the seller.
* **Product Management:** Ability to add new products with image uploads to Cloudinary.
* **Product Approval System:** A dashboard to view and approve newly added products before they appear in the main store.
* **Order Management:** A comprehensive view of all customer orders with the ability to update their status (e.g., Pending, Shipped, Delivered).

---

## 🚀 Tech Stack

| Category      | Technology                                                                                                  |
| :------------ | :---------------------------------------------------------------------------------------------------------- |
| **Frontend** | React, Vite, Tailwind CSS, Axios, React Router                                                              |
| **Backend** | Node.js, Express.js, JWT for Authentication                                                                 |
| **Database** | MongoDB with Mongoose ODM                                                                                   |
| **Deployment & Services** | Vercel (for hosting), Cloudinary (for image storage)                                                |

---

## 📁 Project Structure

This project is a monorepo containing two main parts:

* `/client`: The React/Vite frontend application.
* `/server`: The Node.js/Express backend API.
* `vercel.json`: Configuration file for deploying the entire project seamlessly on Vercel.

---

## ⚙️ Getting Started

To run this project on your local machine, follow these steps.

### Prerequisites
* Node.js (v18 or later)
* npm
* MongoDB (local installation or a cloud instance like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/adityadubey98/ShopEZ.git](https://github.com/adityadubey98/ShopEZ.git)
    cd ShopEZ
    ```

2.  **Set up the Backend (`/server`):**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `/server` directory and add the following variables:
    ```env
    # server/.env
    MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
    JWT_SECRET=YOUR_SUPER_SECRET_JWT_KEY
    SELLER_EMAIL=your-seller-email@example.com
    SELLER_PASSWORD=your-seller-password
    FRONTEND_URL=http://localhost:5173

    # Cloudinary Credentials
    CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
    CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
    ```

3.  **Set up the Frontend (`/client`):**
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `/client` directory and add the following:
    ```env
    # client/.env
    VITE_BACKEND_URL=http://localhost:4000
    ```

### Running the Application

1.  **Start the Backend Server:**
    In the `/server` directory, run:
    ```bash
    npm run dev
    ```
    The backend will be running on `http://localhost:4000`.

2.  **Start the Frontend Development Server:**
    In the `/client` directory, run:
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

---

## 🚀 Deployment

This project is configured for easy deployment on **Vercel**. The `vercel.json` file in the root directory contains all the necessary build and routing configurations to deploy the monorepo as a single project.
