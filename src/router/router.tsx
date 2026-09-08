import { createBrowserRouter } from "react-router";
import { SignInPage } from "../pages/SignInPage";
import App from "../App";
import { SignUpPage } from "../pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "signin",
    element: <SignInPage />
  },
  {
    path: "signup",
    element: <SignUpPage />
  }

])