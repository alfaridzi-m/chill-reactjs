import { create } from 'zustand';
import axios from 'axios';

const token = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};
export const useFilmDetailStore = create((set) => ({
  filmDetail: null,
  detailLoading: false,
  detailError: null,

  fetchFilmDetail: async (filmData) => {
    set({ detailLoading: true, detailError: null });
    try {
      if (typeof filmData === 'object' && filmData !== null) {
        set({ filmDetail: filmData, detailLoading: false });
      } else {
        const url = `https://api.themoviedb.org/3/movie/${filmData}?language=en-US`;
        const response = await axios.get(url, options);
        set({ filmDetail: response.data, detailLoading: false });
      }
    } catch (error) {
      set({ detailError: error, detailLoading: false });
    }
  },
  resetFilmDetail: () => set({ filmDetail: null, detailError: null }),
  searchResults: [],
  searchLoading: false,
  searchError: null,

  searchFilms: async (query) => {
    if (!query || query.trim() === '') {
      set({ searchResults: [], searchLoading: false, searchError: null });
      return;
    }

    set({ searchLoading: true, searchError: null });
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`;
      const response = await axios.get(url, options);
      set({ searchResults: response.data.results, searchLoading: false });
    } catch (error) {
      set({ searchError: error, searchLoading: false });
    }
  },

  resetSearch: () => set({ searchResults: [], searchError: null }),
}));