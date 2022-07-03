import axios from "axios";

export const API_URL = `http://localhost:3001`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

// при авторизации для потенциального использования токенов

// $api.interceptors.request.use((config: any) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     "some-token"
//   )}`;
//   return config;
// }); 

// "Обработчик перехватчик 'неавторизированные пользователи'"
// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}/refresh`, {
//           withCredentials: true,
//         });
//         localStorage.setItem("some-token", response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log("Пользователь не зашел в систему");
//       }
//     }
//     throw error;
//   }
// );

export default $api;