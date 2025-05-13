# 🛒 Butopia - Modern eCommerce Website

Welcome to **Butopia**, a modern and responsive eCommerce frontend built with **React**, **Vite**, and **Tailwind CSS**. It allows users to browse products, view details, and interact with an elegant UI backed by a live REST API.
---

## 🚀 Live Demo

👉 [https://buytopians.vercel.app/]



---

## 🧰 Tech Stack

- **Frontend Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Notifications:** React Toastify
- **Deployment:** Render (backend)

---

## 🔥 Features

- Dynamic product list fetched from backend
- Single product detail view
- Clean, responsive UI
- Footer with newsletter and social media icons
- Environment-based API connection using `.env`

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mroxygen2024/Buytopia.git
cd Butopia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env # you can create it manually 
```

Then paste the following:

```env
VITE_API_BASE_URL=https://ecommerce-backend-tqgh.onrender.com/api/v1
```


### 4. Start the Development Server

```terminal/bash
npm run dev

```
Open your browser and go to `http://localhost:5173` #Port number might be changed
---

## 🌳 Project Structure

```
src/
├── assets/           # Static files (images, logos, etc.)
├── components/       # Reusable components (ProductCard, Footer, etc.)
├── pages/            # Page components (Home, Products, About, etc.)
├── contexts          # Contexts for state management (using React Context API)
├── data              # Static data files (e.g., JSON files for products incase products API is not fetching)
├── routes            # Routing-related files
├── App.jsx           # Main app layout with routes
├── index.css         # Global styles
├── main.jsx          # Vite entry file
```
---


---

## 📄 .env.example

Create a `.env` file based on this template:

```
# .env.example
VITE_API_BASE_URL=https://ecommerce-backend-tqgh.onrender.com/api/v1
```

---

## Contributors

**Fuad Sano**
- 💻 GitHub: [https://github.com/mroxygen2024]

**Chala Temesgen**
- 💻 GitHub: [https://github.com/Chala751]

**Gelila Mulugeta**
- 💻 GitHub: [https://github.com/ahvi27]

**Hanan Eyob**
- 💻 GitHub: [https://github.com/ruhatrix]

**Iman Bedru**
- 💻 GitHub: [https://github.com/misskal20]

---


## 🙏 Acknowledgements

- Thanks to **Mubarek Shikur** for providing the backend API.
- Thanks to the **CSEC ASTU Dev Division** communities for guidance and support.

