import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "./postSlice";

const PostModal = ({ isOpen, onClose, editData }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setContent(editData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(editPost({ id: editData.id, title, content }));
    } else {
      dispatch(addPost(title, content));
    }
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-2xl mb-6 mt-4">
          {editData ? "Edit Post" : "Add New Post"}
        </h3>
        {/* Modal content */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            rows="6"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="flex justify-end space-x-2 py-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {editData ? "Update" : "Add"} Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
