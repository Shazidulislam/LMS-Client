import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/react'
import { ToastContainer } from "react-toastify";

// import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY)
if(!PUBLISHABLE_KEY){
  throw new Error("Add you Clerk publishable key to the .env file")
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}  afterSignOutUrl={"/"}>
      <BrowserRouter>
        <App />
        <ToastContainer/> 
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
);
