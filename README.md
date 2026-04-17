# Ordering Portal

A simple full-stack CRUD-based ordering system built using React and Express (TypeScript).

---

## 🚀 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Express.js with TypeScript
* **Testing:** Jest (unit tests for service layer)

---

## 📦 Features

* Create new orders
* View all orders
* Update order status
* Delete orders
* Unit tested business logic

---

## 🧠 Design Decisions

* Used a **service layer** to separate business logic from controllers
* Implemented **in-memory data storage** for simplicity
* Focused **unit testing on the service layer** for better isolation
* Kept frontend minimal to clearly demonstrate API interaction

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rvrv1234/ordering-portal.git
cd ordering-portal
```

---

### 2. Run Backend

```bash
cd backend
npm install
npx ts-node-dev src/server.ts
```

Backend runs on:
👉 http://localhost:5000

---

### 3. Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
👉 http://localhost:5173

---

## 🧪 Running Tests

```bash
cd backend
npm test
```

---

## 📁 Project Structure

```
ordering-portal/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── services/
│       ├── routes/
│       ├── types/
│       └── tests/
│
└── frontend/
    └── src/
```

---

## 🔗 API Endpoints

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| GET    | /orders     | Get all orders |
| POST   | /orders     | Create order   |
| PUT    | /orders/:id | Update order   |
| DELETE | /orders/:id | Delete order   |

---

## 📝 Notes

* This project focuses on **clean architecture, maintainability, and testing**
* No database is used; data is stored in memory for simplicity
* Designed as part of an evaluation assignment

---

## 👨‍💻 Author

Ravindu Sasanka
