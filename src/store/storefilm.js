import { create } from "zustand";
import axios from "axios";


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=5'
const token = import.meta.env.VITE_TMDB_BEARER_TOKEN
const options = {
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
    }
}
