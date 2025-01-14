# Redux Blog Application

A responsive blog application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This app allows users to **add**, **edit**, and **delete** blog posts, with **dark mode** support and **data persistence** using **redux-persist**.

---

## 🚀 Features

- **Add, Edit, and Delete Posts** with an intuitive UI.
- **Modal Forms** for adding and editing posts.
- **Dark Mode** toggle with smooth transitions.
- **State Persistence** using `redux-persist` (data is saved across sessions).
- **Responsive Design** with Tailwind CSS.

---

## 📂 Project Structure

```
├── src
│   ├── app
│   │   └── store.jsx          # Redux store setup with redux-persist
│   ├── components
│   │   └── PostList.jsx      # Renders blog posts with edit and delete options
│   ├── features
│   │   └── posts
│   │       ├── postModal.jsx # Modal component for adding/editing posts
│   │       └── postSlice.jsx # Redux slice for post CRUD operations
│   ├── index.css             # Global styling with Tailwind CSS
│   ├── App.jsx               # Main component managing layout and state
│   └── main.jsx              # App entry point with Redux Provider
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

- **React** (v18+)
- **Redux Toolkit**
- **redux-persist**
- **Tailwind CSS**
- **Heroicons**

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/redux-blog.git
   cd redux-blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Key Components

### 1. **Redux Store Setup (`store.jsx`)**
- Configures the Redux store with `postSlice`.
- Uses `redux-persist` to persist state across sessions.

### 2. **Post Slice (`postSlice.jsx`)**
- Manages posts state with actions: `addPost`, `editPost`, and `deletePost`.
- Uses `nanoid` to generate unique IDs for posts.

### 3. **Post List (`PostList.jsx`)**
- Fetches posts from Redux store.
- Renders blog posts with **Edit** and **Delete** buttons.

### 4. **Post Modal (`postModal.jsx`)**
- Modal form to **add** or **edit** a blog post.
- Populates fields when editing an existing post.

### 5. **Dark Mode (`App.jsx`)**
- Dark mode toggle using `useState` and `useEffect`.
- Implements Tailwind's dark mode classes.

---

## 📖 Usage Guide

1. **Add a Post:**
   - Click the **Add Blog** button.
   - Fill in the **Title** and **Content**.
   - Click **Add Post**.

2. **Edit a Post:**
   - Click the **Edit** button (✏️) on a post.
   - Modify the content and click **Update Post**.

3. **Delete a Post:**
   - Click the **Delete** button (🗑️) on a post.

4. **Toggle Dark Mode:**
   - Click the sun 🌞 or moon 🌙 icon in the header.

---

## ⚙️ Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

---

## 📝 Future Improvements

- Add **categories** and **tags** for posts.
- Implement **search** and **filter** functionality.
- Add **authentication** for multi-user support.

---

## 📬 Contact

For any inquiries or feedback, feel free to reach out:

- **GitHub**: [your-username](https://github.com/Nur-Alam-Limon)
- **Email**: your-nuralam201425@gmail.com

---


