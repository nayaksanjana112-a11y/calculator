# Calculator with Login - README

## 📌 Project Overview

This project is a **Calculator Web Application** that includes a **login system** before giving access to the calculator. It is built using:

* **HTML** for structure
* **CSS** for styling
* **JavaScript** for functionality (login + calculator operations)
* **Bootstrap** for layout components

The user must successfully log in using the predefined **username** and **password** to access the calculator.

---

## 🔐 Login Details

Default credentials:

* **Username:** `user`
* **Password:** `1234`

You can modify these values inside `script.js`.

---

## 📁 Project Structure

```
📦 Project Folder
├── index.html        # Main webpage
├── style.css         # Styling
└── script.js         # Login + Calculator logic
```

---

## 🧩 Features

### ✅ 1. Login System

* Validates username and password
* Prevents access without authentication
* Displays error message for invalid login
* "Enter" key triggers login

### ✅ 2. Calculator Features

* Basic arithmetic: **+ , - , × , ÷**
* **Square (x²)** operator
* **Modulo (%)** operator
* Decimal point support
* AC button to clear screen
* Prevents errors such as dividing by zero

### ✅ 3. User Interface

* Modern design using **Bootstrap**
* Centered login card & calculator layout
* Responsive UI

---

## 📜 How to Use

1. Open `index.html` in any browser.
2. Enter username & password.
3. After successful login, the calculator appears.
4. Use buttons to perform calculations.
5. Press **AC** to reset.

---

## 🛠️ How to Change Username/Password

Inside **script.js**, update these lines:

```javascript
const USERNAME = "user";
const PASSWORD = "1234";
```

Replace with your preferred login credentials.


If you want to add new features or fix bugs, feel free to ask!
