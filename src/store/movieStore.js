import { create } from 'zustand';
import axios from 'axios';

const token = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};
export const useMovieStore = create((set) => ({
  nowPlayingMovies: [],
  nowPlayingLoading: true,
  nowPlayingError: null,

  topRatedMovies: [],
  topRatedLoading: true,
  topRatedError: null,

  trendingMovies: [],
  trendingLoading: true,
  trendingError: null,

  continueWatchingMovies: [],
  continueWatchingLoading: true,
  continueWatchingError: null,

  moviePlayer: null,
  movieLoading: true,
  movieError: null,

  fetchNowPlayingMovies: async () => {
    set({ nowPlayingLoading: true, nowPlayingError: null });
    try {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const response = await axios.get(url, options);
      set({ nowPlayingMovies: response.data.results, nowPlayingLoading: false });
    } catch (error) {
      set({ nowPlayingError: error, nowPlayingLoading: false });
    }
  },


  fetchTopRatedMovies: async () => {
    set({ topRatedLoading: true, topRatedError: null });
    try {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const response = await axios.get(url, options);
      set({ topRatedMovies: response.data.results, topRatedLoading: false });
    } catch (error) {
      set({ topRatedError: error, topRatedLoading: false });
    }
  },

  fetchTrendingMovies: async () => {
    set({ trendingLoading: true, trendingError: null });
    try {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=5';
      const response = await axios.get(url, options);
      set({ trendingMovies: response.data.results, trendingLoading: false });
    } catch (error) {
      set({ trendingError: error, trendingLoading: false });
    }
  },


  fetchContinueWatchingMovies: async () => {
    set({ continueWatchingLoading: true, continueWatchingError: null });
    try {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=4';
      const response = await axios.get(url, options);
      set({ continueWatchingMovies: response.data.results, continueWatchingLoading: false });
    } catch (error) {
      set({ continueWatchingError: error, continueWatchingLoading: false });
    }
  },

  fetchMoviePlayer: async (id) => {
    set({ movieLoading: true, movieError: null });
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const response = await axios.get(url, options);
      set({ moviePlayer: response.data, movieLoading: false });
    } catch (error) {
      set({ movieError: error, movieLoading: false });
    }
  },

}));