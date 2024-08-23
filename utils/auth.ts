// import { mockToken } from "@/utils/mockToken";

// interface User {
//   phoneNumber: string;
//   password: string;
//   name: string;
//   email: string;
// }

// export const registerUser = (phoneNumber: string, password: string, name: string, email: string): string => {
//   const user: User = { phoneNumber, password, name, email };
//   localStorage.setItem("user", JSON.stringify(user));
//   localStorage.setItem("jwt", mockToken.token);

//   setTimeout(() => {
//     localStorage.removeItem("jwt");
//   }, 3600 * 1000); 

//   return mockToken.token;
// };

// export const loginUser = (phoneNumber: string, password: string): string | null => {
//   const user: User | null = JSON.parse(localStorage.getItem("user") || "null");
//   if (user && user.phoneNumber === phoneNumber && user.password === password) {
//     localStorage.setItem("jwt", mockToken.token);
    
//     setTimeout(() => {
//       localStorage.removeItem("jwt");
//     }, 3600 * 1000); 
    
//     return mockToken.token;
//   }
//   return null;
// };

// export const logoutUser = (): void => {
//   localStorage.removeItem("jwt");
// };
