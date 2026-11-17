# Dyams Login Application (Connected to Local MongoDB)

This is a clean, modern login and sign-up web application built with **Node.js, Express, Mongoose, and MongoDB**.

---

## 1. Prerequisites
- **Node.js**: Installed (`C:\Program Files\nodejs`)
- **MongoDB**: Installed locally (`C:\Program Files\MongoDB\Server\8.0\bin`)

---

## 2. Install Dependencies
Open PowerShell or Git Bash inside this folder:
```bash
cd C:\Users\user06\dyams
npm install
```

---

## 3. Ensure Local MongoDB is Running
If your MongoDB Windows service is not already running, start it:
```cmd
net start MongoDB
```
Or run the daemon directly:
```cmd
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\data\db"
```

---

## 4. Run the Application
```bash
npm start
```
or:
```bash
node server.js
```

The application will start on:
👉 **http://localhost:3000**

---

## Features
- **Sign Up**: Creates a new user with hashed passwords via `bcryptjs` and stores it in the local `login_db` MongoDB database.
- **Sign In**: Supports login using either **Username** or **Email**.
- **Session Management**: Session persistence using `express-session` with secure cookies.
- **Dashboard**: Protected page displaying authenticated user details with a logout option.
- **Responsive UI**: Modern dark theme with client-side validation and feedback alerts.
