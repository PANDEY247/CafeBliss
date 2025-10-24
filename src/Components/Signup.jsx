// import React, { useState } from "react";
// import { auth } from "../FirebaseConfig";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email.includes("@")) return setError("Please enter a valid email.");
//     if (password.length < 6) return setError("Password must be at least 6 characters.");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await sendEmailVerification(userCredential.user);
//       setMessage("OTP sent! Please verify your email before logging in.");
//       setError("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-stone-50">
//       <form onSubmit={handleSignup} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center mb-6 text-amber-900">Sign Up</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="border w-full mb-3 p-2 rounded-lg"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border w-full mb-3 p-2 rounded-lg"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//         {message && <p className="text-green-600 text-sm mb-3">{message}</p>}

//         <button type="submit" className="bg-amber-800 text-white w-full py-2 rounded-lg hover:bg-amber-900 transition">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
