import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const PostList = ({ onEdit }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-1 gap-6 mt-12">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition block"
        >
          <h3 className="text-xl font-bold mb-4 text-sky-500">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.content}
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => onEdit(post)}
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => dispatch(deletePost(post.id))}
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
