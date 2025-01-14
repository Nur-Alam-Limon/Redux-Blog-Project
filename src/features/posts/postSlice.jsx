import { createSlice, nanoid } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => ({
        payload: { id: nanoid(), title, content },
      }),
    },
    editPost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id != action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
