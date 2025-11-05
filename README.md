# 🎥 XtraVision - Smart Security Camera Web Application

## 🌐 Live Demo  
🚀 **Frontend + Backend (Deployed Full Stack):**  
👉 [https://xtravision-3.onrender.com](https://xtravision-3.onrender.com)

---

## 🧩 Overview
**XtraVision** is a full-stack smart security camera web application built with  
**React (Vite) + Tailwind CSS** for the frontend and **Spring Boot + MySQL** for the backend.  

It allows users to:
- 🛒 Browse security products (like CCTV, smart cameras, etc.)
- 🔧 View professional services and details
- 📩 Submit contact forms to request installations or quotes

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
- Fetch API
- Responsive Design

### 🧠 Backend
- Spring Boot (Java)
- RESTful APIs
- Hibernate / JPA
- MySQL (Clever Cloud)
- Deployed on **Render**

---

## 📦 Features
- 📸 Display of all products dynamically from MySQL database  
- 🧰 Services section fetched from backend  
- 📋 Contact form integrated with backend API  
- 🌐 Full responsiveness for all devices  
- 🔒 Secure backend connection (CORS configured)  
- ☁️ Fully deployed with database connection  

---

## 🗃️ API Endpoints

### Products
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/{id}` | Fetch product by ID |
| POST | `/api/products` | Add new product |
| PUT | `/api/products/{id}` | Update existing product |
| DELETE | `/api/products/{id}` | Delete product |

### Services
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/services` | Fetch all services |
| GET | `/api/services/{id}` | Fetch service by ID |
| POST | `/api/services` | Add new service |
| PUT | `/api/services/{id}` | Update service |
| DELETE | `/api/services/{id}` | Delete service |

### Contact Form
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/contacts` | Submit a contact form |

---

## 💾 Database
- Hosted on **Clever Cloud MySQL**
- Connected securely to the Spring Boot backend via JPA/Hibernate

---

## 🚀 Deployment
| Layer | Platform |
|--------|-----------|
| **Frontend** | Render (Static Site) |
| **Backend** | Render (Spring Boot Web Service) |
| **Database** | Clever Cloud (MySQL) |

---

## 🧠 Developer
👨‍💻 **Zaid Asfi**  
🎓 Mechanical Engineer → Java Full Stack Developer  
📍 Pune, Maharashtra
and
Delhi,India
📧 [zaidasfi02@gmail.com](mailto:zaidasfi02@gmail.com)  
🌐 GitHub: [Zaidasfi02](https://github.com/Zaidasfi02)

---

## 🏁 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Zaidasfi02/XtraVision.git
cd XtraVision
