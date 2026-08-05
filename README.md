# 🌍 GlobalConnect Management

GlobalConnect Management is a modern full-stack B2B global trade platform that simplifies international commerce by connecting **Exporters, Buyers, and Shipping Partners** on a single platform. It provides a centralized solution for managing products, processing international orders, coordinating shipments, and tracking deliveries in real time.

The platform is designed to help exporters expand globally by digitizing trade operations, improving communication between buyers and suppliers, and providing a transparent workflow from product listing to final delivery.

Built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, the application delivers a secure, scalable, and responsive experience across desktop and mobile devices.

---

# 🌐 Live Demo

### Frontend
https://global-connect-management.vercel.app

### Backend API
https://globalconnect-management.onrender.com

---

# 🚀 Features

## 🔐 Authentication & Authorization
- Secure JWT Authentication
- User Registration & Login
- Role-Based Access Control
- Protected Dashboard Routes

---

## 📦 Product Management
- Create Products
- Update Products
- Delete Products
- Browse Products
- Product Categories
- Product Image Upload (Cloudinary)
- Product Availability Management

---

## 🛒 Order Management
- International Product Ordering
- Buyer Order History
- Exporter Order Management
- Order Status Tracking

---

## 🚚 Shipping Management
- Assign Shipping Partners
- Shipping Request Management
- Shipment Tracking
- Delivery Status Updates

---

## 🌍 Global Trade Platform
- Connect Exporters with Buyers Worldwide
- International Product Listings
- Country of Origin Management
- Product Certifications
- Trade Workflow Management

---

## 🤖 AI Chatbot
- AI-powered Customer Support
- Product Assistance
- General Trade Queries
- Integrated Groq API

---

## 👤 User Dashboard
- Exporter Dashboard
- Buyer Dashboard
- Shipper Dashboard
- Profile Management
- Account Settings

---

# 💻 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Shadcn UI
- React Router DOM
- Axios
- Lucide React

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- Cloudinary
- CORS

## Database
- MongoDB Atlas

## Deployment
- Vercel
- Render

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Ridafarhin590/GlobalConnect-Management.git
```

```bash
cd GlobalConnect-Management
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside **backend**.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

FRONTEND_URI=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

VITE_GROQ_API_KEY=your_groq_api_key
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside **frontend**.

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# 📂 Project Structure

```
GlobalConnect-Management
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── contexts
│   │   ├── layouts
│   │   ├── pages
│   │   ├── services
│   │   └── lib
│   └── public
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
└── README.md
```

---

# 🔒 Security

- JWT Authentication
- Password Encryption
- Role-Based Authorization
- Protected Routes
- Secure REST APIs
- Environment Variable Configuration

---

# 📈 Future Enhancements

- Payment Gateway Integration
- Real-Time Shipment Tracking
- Admin Dashboard
- Email Notifications
- Analytics Dashboard
- Multi-language Support
- Ratings & Reviews
- Wishlist
- Live Chat

---

# 🤝 Contributing

1. Fork the repository

2. Create a new feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

Copyright (c) 2026 **Rida Farhin**

---

# 👩‍💻 Author

**Rida Farhin**

📧 Email: ridafarhin59@gmail.com

🔗 GitHub:
https://github.com/Ridafarhin590

🔗 LinkedIn:
https://www.linkedin.com/in/ridafarhin

---

⭐ If you found this project useful, please consider giving it a **Star** on GitHub.
