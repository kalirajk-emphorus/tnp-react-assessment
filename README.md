# ShopEase - E-Commerce Web Application

A full-featured E-Commerce web application built with React.js and Redux Toolkit. The application provides user authentication, product management, shopping cart functionality, order processing, search, pagination, and a complete checkout experience.

---

# Features

## Authentication

* User Signup and Login
* Role-Based Access Control (Admin/User)
* Persistent Authentication using Local Storage
* Session Persistence Across Refreshes

---

## Product Management

* View All Products
* Product Search Functionality
* Product Details Page
* Pagination Support
* Admin Product Management

  * Add Products
  * Edit Products
  * Delete Products

---

## Cart Management

* Add Products to Cart
* Increase / Decrease Product Quantity
* Remove Products from Cart
* User-Specific Cart Storage
* Persistent Cart Across Refreshes

---

## Checkout System

* Order Summary Page
* GST Calculation (18%)
* Coupon Code Validation
* Discount Application
* Order Placement
* Automatic Cart Clearance After Successful Checkout

---

## Orders

Orders are stored using JSON Server and include:

* Ordered Items
* Subtotal
* GST Amount
* Discount Amount
* Total Amount
* Order Date

---

## Search & Pagination

* Search Products by Name
* Client-Side Pagination
* Previous / Next Navigation

---

## UI / UX Features

* Responsive Design
* Modern User Interface
* Tailwind CSS Styling
* Snackbar Notifications
* Loading Skeletons
* Confirmation Dialogs

---

# Tech Stack

## Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hook Form

## Backend (Mock API)

* JSON Server

---

# Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── cart/
│   ├── common/
│   ├── layout/
│   └── product/
│
├── hooks/
│
├── pages/
│
├── redux/
│
├── routes/
│
├── services/
│
├── utils/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/kalirajk-emphorus/ecommerce-app.git
```

## 2. Navigate to the Project Directory

```bash
cd ecommerce-app
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Mock Backend Server

Open a terminal and run:

```bash
npm run server
```

This starts the JSON Server that provides the mock API for products, users, carts, and orders.

## 5. Start the Frontend Application

Open another terminal and run:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Important

Both the frontend application and the JSON Server must be running simultaneously.

Terminal 1:

```bash
npm run server
```

Terminal 2:

```bash
npm run dev
```

---

# Demo Credentials

## User Account

```text
Email: test@test.com
Password: test123
```

## Admin Account

```text
Email: admin@test.com
Password: admin123
```

---

# Notes

* This project uses JSON Server as a mock backend.
* Data is stored locally for demonstration purposes.
* Authentication is implemented using Local Storage.
* No environment variables are required to run the application.
* This project was developed as part of a React.js assessment task.
* The application is intended for learning and evaluation purposes.

---

# Future Enhancements

* Payment Gateway Integration
* Wishlist Functionality
* Product Categories and Filters
* User Profile Management
* Order Tracking
* Backend API Integration
* JWT Authentication with Refresh Tokens
* Product Reviews and Ratings

---

# Author

**Kaliraj K**

GitHub: https://github.com/kalirajk-emphorus

---

# License

MIT License

Copyright (c) 2026 Kaliraj K

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

---

Thank you for reviewing this project.
