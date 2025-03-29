import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // Clear user session, reset state, and redirect to login
      // localStorage.removeItem("userToken"); // Example: Remove token from storage
      // window.location.href = "/login"; // Redirect to login page
      // Optionally, dispatch a state reset action if using a state management library
      // e.g., store.dispatch({ type: "RESET_STATE" });
    }
    return Promise.reject(
      error instanceof Error
        ? error
        : new Error(error.message || 'Unknown error'),
    );
  },
);

export default api;
