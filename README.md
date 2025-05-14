# User Login Prediction System

This project is a web application that predicts users' future login times based on their historical login data. It uses **Laravel 12** for the backend and **React** as the frontend, powered by **Vite** through the official Laravel Vite React plugin.

## ✨ Features

- Predicts future login times using two different algorithms: average-based and pattern-based.
- Built with Laravel 12 and Vite-powered React.
- Tailwind CSS for a modern, responsive UI.
- RESTful API to serve prediction data.
- Axios-based data fetching.
- Easily extendable algorithm structure using Laravel Service Providers.

---

## 📦 Tech Stack

- **Laravel 12** (Backend & API)
- **React 18** (Frontend via Laravel Vite Plugin)
- **Vite** (Bundler)
- **Tailwind CSS** (Styling)
- **Axios** (HTTP client)

---

## 🛠 Installation

### Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL or SQLite (or any supported database)

### Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/senafrakara/User-Login-Predictor-Laravel-React.git
   cd user-login-predictor
````

2. **Install PHP dependencies**

   ```bash
   composer install
   ```

3. **Install Node dependencies**

   ```bash
   npm install
   ```
    Initialize Tailwind CSS**
   ```bash
   npx tailwindcss init -p
    ```

4. **Configure your environment**

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   Make sure to configure your `.env` database section correctly.

5. **Enable Laravel's API routes (required in Laravel 12)**

   ```bash
   php artisan install:api
   ```

6. **Run the development servers**
   In one terminal:

   ```bash
   php artisan serve
   ```

   In another terminal:

   ```bash
   npm run dev
   ```

---

## 🔗 API Endpoint

**GET** `/api/predictions`
Returns a list of users and their login predictions.

**Example Response:**

```json
[
  {
    "id": 1,
    "logins": [
      "2024-05-01T08:00:00Z",
      "2024-05-02T08:30:00Z"
    ],
    "predicted_login_average": "2024-05-15T08:15:00Z",
    "predicted_login_pattern": "2024-05-15T08:30:00Z"
  }
]
```

---

## 🖥 UI Preview

The app displays the predictions in a styled table:

* **User ID**
* **Last Login**
* **Predicted Login (Average)**
* **Predicted Login (Pattern)**

It uses Tailwind classes for layout and hover effects.

---

## 📂 Project Structure Highlights

```
.
├── app/
├── resources/
│   └── js/ components         ← React components (e.g. UserPredictionTable.jsx)
│   └── views/
│       └── welcome.blade.php (or any blade file rendering the Vite app)
├── routes/
│   └── api.php      ← /api/predictions route
├── public/
├── vite.config.js   ← Laravel Vite config for React
```

---

## 📄 License

This project is open-sourced under the [MIT license](LICENSE).

---

## 🙋‍♀️ Author

* Developed by **\Nursena Karakulah**
* [GitHub](https://github.com/senafrakara/) • [LinkedIn](https://www.linkedin.com/in/nursena-karakulah/)


