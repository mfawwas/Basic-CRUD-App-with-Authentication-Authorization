# Basic-CRUD-App-with-Authentication-Authorization

## Project Overview

This project is a backend RESTful API built using Node.js, Express.js, MongoDB, JWT, and bcrypt.
It allows users to register, log in securely, and perform CRUD (Create, Read, Update, Delete) operations on articles.

## Features
* User registration and login
* Password hashing using bcrypt
* Authentication using JSON Web Tokens (JWT)
* Protected routes using middleware
* CRUD operations for articles
* Authorization to ensure users can only modify their own data
* MongoDB database with Mongoose schemas

## Technologies Used
* Node.js
* Express.js
* MongoDB
* Postman (for API testing)

## API Functionalities
* Register a new user
* Login and receive a JWT token
* Create an article (authenticated users only)
* Retrieve all articles
* Retrieve a single article by ID
* Update an article (owner or admin only)
* Delete an article (owner or admin only)

## Project Structure
* The project follows a standard MVC-like structure.

## API Documentation (Postman)
The API endpoints were tested and documented using Postman.
Postman Collection Link: https://documenter.getpostman.com/view/51153123/2sBXVeFCU7
