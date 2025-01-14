import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostModal from "./features/posts/postModal";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const openModal = (post = null) => {
    setEditData(post);
    setIsModalOpen(true);
  };

  return (
    <div className="font-sans dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full border-b border-gray-300 dark:border-gray-700 py-6">
        <div className="max-w-5xl mx-auto w-11/12 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">Redux Blog</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-sky-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-sky-800" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-5xl w-11/12 py-8 px-4 lg:px-0">
        <div className="border-b flex justify-between items-center border-gray-500 dark:border-gray-700 py-4">
          <h2 className="text-xl font-semibold">Blog Posts</h2>
          <button
            onClick={() => openModal()}
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Blog
          </button>
        </div>

        <PostList onEdit={openModal} />
      </main>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editData={editData}
      />
    </div>
  );
};

export default App;
