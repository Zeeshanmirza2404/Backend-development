# Backend Development Practice Sets

This repository contains three progressive practice sets demonstrating backend development concepts using Node.js. Each practice set builds upon the previous one, introducing more advanced features and best practices.

## Overview

These practice sets cover fundamental backend development topics including:

- HTTP server creation and request handling
- Routing and middleware
- Form data processing
- File system operations for data persistence
- MVC (Model-View-Controller) architecture
- Template engines (EJS)
- CRUD operations

## Practice Set 1: Basic HTTP Server

**Location:** `practice-set/`

**What was studied:**

- Creating a basic HTTP server using Node.js core `http` module
- Manual request/response handling
- Basic routing logic
- Form data parsing and processing
- File system operations for data storage

**What was implemented:**

- A simple web server with multiple routes (/, /men, /women, /kids, /cart)
- HTML form handling for user data submission
- Data persistence to a text file (`user.txt`)

**Files created:**

- `app.js` - Main server file with routing logic
- `user.txt` - Data storage file for form submissions

## Practice Set 2: Express.js Fundamentals

**Location:** `practice-set2/`

**What was studied:**

- Introduction to Express.js framework
- Modular routing with Express Router
- Middleware usage (body parsing)
- Serving static files
- Separation of concerns with route handlers

**What was implemented:**

- Express application with organized routing structure
- Contact form with data submission and storage
- Static HTML views for different pages
- Error handling with 404 page

**Files created:**

- `app.js` - Main Express application setup
- `package.json` - Project dependencies and scripts
- `routes/homeRouter.js` - Router for home page
- `routes/contactRouter.js` - Router for contact functionality
- `utils/pathUtils.js` - Utility for path management
- `views/` - HTML view files (home.html, contact-us.html, contact-success.html, 404.html)
- `contact-us-data.txt` - Data storage for contact form submissions

## Practice Set 3: MVC Architecture with EJS Templates

**Location:** `practice-set3/`

**What was studied:**

- MVC (Model-View-Controller) design pattern
- Template engines (EJS) for dynamic content
- Data modeling and persistence
- CRUD operations implementation
- Separation of business logic, data access, and presentation layers

**What was implemented:**

- A property rental platform with two user roles: Store (customers) and Host (property owners)
- Complete CRUD operations for property listings
- Booking system for customers
- Dynamic templating with EJS
- File-based JSON data storage

**Files created:**

- `app.js` - Main Express application with EJS setup
- `package.json` - Project dependencies
- `controllers/storeController.js` - Controller for customer-facing operations
- `controllers/hostController.js` - Controller for property owner operations
- `controllers/error.js` - Error handling controller
- `models/home.js` - Data model for property listings with CRUD methods
- `routes/storeRouter.js` - Routes for customer functionality
- `routes/hostRouter.js` - Routes for property owner functionality
- `utils/pathUtils.js` - Path utility functions
- `data/localStorage.json` - JSON data storage for properties
- `views/` - EJS template files organized by functionality:
  - `store/` - Customer views (home listings, details, booking, favourites)
  - `host/` - Property owner views (add/edit properties, listings)
  - `partials/` - Reusable template components (header, footer, navbar)
  - `404.ejs` - Error page template

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Template engine
- **File System** - Data persistence (text files and JSON)

## Running the Applications

Each practice set can be run independently:

1. Navigate to the desired practice set directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open browser to the displayed localhost URL

## Learning Progression

1. **Practice Set 1** - Foundation: Understanding HTTP basics without frameworks
2. **Practice Set 2** - Framework Introduction: Leveraging Express.js for cleaner code
3. **Practice Set 3** - Architecture: Implementing professional patterns and full-featured application

This progression demonstrates the evolution from basic server concepts to production-ready backend architecture.
