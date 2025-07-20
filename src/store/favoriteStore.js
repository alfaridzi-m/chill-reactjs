import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [],

      addToFavorites: (movie) => 
        set((state) => {
          const exists = state.favorites.some((item) => item.id === movie.id);
          if (exists) return state;
          return { favorites: [...state.favorites, movie] };
        }),

      removeFromFavorites: (movieId) => 
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId)
        })),

      isFavorite: (movieId) => {
        const state = useFavoriteStore.getState();
        return state.favorites.some((movie) => movie.id === movieId);
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorite-movies', 
      getStorage: () => localStorage, 
    }
  )
);