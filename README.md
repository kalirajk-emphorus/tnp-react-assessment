# Job Portal Management System (Frontend)

A modern Job Portal web application built using React.js, Redux Toolkit, and Material UI.  
This project demonstrates a real-world job portal with both User and Admin functionalities using dummy/mock data.

---

##  Project Overview

This project is developed as part of a frontend machine test to evaluate:

- Frontend development skills
- State management using Redux Toolkit
- API/mock data handling
- Code quality and scalability
- UI/UX implementation

---

## Features

###  User Features

- Job listing page with pagination
- Advanced filtering (category, experience level)
- Job details page
- Apply for jobs functionality
- Responsive landing page with featured jobs

---

###  Admin Features

- Admin login (dummy authentication)
- Dashboard page
- Create, edit, and delete job postings
- Job listing management
- Pagination and filtering support

---

## State Management (Redux Toolkit)

All application state is managed using Redux Toolkit:

- Authentication state (admin/user)
- Job listings data
- Applied jobs data
- Filters (category, experience, search)
- Pagination state

---

## Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Material UI (MUI)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Project Structure

src/

src/
├── app/
├── assets/
├── components/
├── data/
├── features/
├── layouts/
├── pages/
├── routes/
├── styles/
├── utils/
├── App.css
├── App.jsx
├── index.css
└── main.jsx

---

## Installation & Setup

### 1. Clone the repository

git clone https://github.com/kalirajk-emphorus/tnp-react-assessment.git

---

### 2. Navigate to project directory

cd tnp-react-assessment

---

### 3. Install dependencies

npm install

---

### 4. Start the application

npm run dev

The application will run at:
http://localhost:5173

---

## Authentication (Dummy Login)

Admin Login:
username: admin  
password: admin123  

User Login:
username: user  
password: user123  

---

## Key Functionalities

- Pagination for job listings
- Filtering by category and experience
- Job CRUD operations (Admin)
- Job application flow (User)
- Role-based routing
- Responsive UI design

---

## UI/UX Highlights

- Clean and modern Material UI design
- Fully responsive layout (mobile + desktop)
- Card-based job listings
- Smooth navigation flow
- Loading and empty states handled

---

## Future Improvements

- Backend integration with database
- JWT authentication system
- Save job functionality
- Email notifications for applications
- Admin analytics dashboard

---

##  Author

Kaliraj K  
Frontend Developer (React.js)

---

## License

This project is for educational and machine test evaluation purposes only.

---

## Note

This project uses mock/dummy data only and does not include backend or environment configuration.