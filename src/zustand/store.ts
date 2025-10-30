import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// export const useCounterStore = create<CounterStore>((set) => ({
//   count: 0,
//   increment: () => {
//     set((state) => ({ count: state.count + 1 }));
//   },
//   decrement: () => {
//   set((state) => ({ count: state.count - 1 }));
//   },
// }));

export const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => {
        set((state) => ({ count: state.count + 1 }));
      },
      decrement: () => {
        set((state) => ({ count: state.count - 1 }));
      },
    }),
    {
      name: "counter-store", // optional: name that appears in devtools
    }
  )
);

// const API_BASE_URL =
//   process.env.REACT_APP_API_URL || "http://localhost:3000/api";

// export const fetchFeed = async () => {
//   const response = await fetch(`${API_BASE_URL}/feed`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch feed");
//   }
//   return response.json();
// };

// stores/feedStore.js
// import { create } from 'zustand';
// import {
//   fetchFeed,
//   createPost,
//   updatePost,
//   deletePost,
//   interactWithPost
// } from '../api/feedApi';

// export const useFeedStore = create((set, get) => ({
//   // State
//   feedData: [],
//   loading: false,
//   error: null,

//   // Actions
//   fetchFeed: async () => {
//     set({ loading: true, error: null });
//     try {
//       const data = await fetchFeed();
//       set({ feedData: data, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   createPost: async (postContent) => {
//     set({ loading: true, error: null });
//     try {
//       const newPost = await createPost(postContent);

//       set((state) => ({
//         feedData: [newPost, ...state.feedData],
//         loading: false
//       }));
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   updatePost: async (postId, updates) => {
//     set({ loading: true, error: null });
//     try {
//       const updatedPost = await updatePost(postId, updates);

//       set((state) => ({
//         feedData: state.feedData.map(post =>
//           post.id === postId ? updatedPost : post
//         ),
//         loading: false
//       }));
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   deletePost: async (postId) => {
//     set({ loading: true, error: null });
//     try {
//       await deletePost(postId);

//       set((state) => ({
//         feedData: state.feedData.filter(post => post.id !== postId),
//         loading: false
//       }));
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   handleInteraction: async (postId, interactionType) => {
//     try {
//       const updatedPost = await interactWithPost(postId, interactionType);

//       set((state) => ({
//         feedData: state.feedData.map(post =>
//           post.id === postId ? updatedPost : post
//         )
//       }));
//     } catch (error) {
//       set({ error: error.message });
//     }
//   },

//   clearError: () => set({ error: null })
// }));
