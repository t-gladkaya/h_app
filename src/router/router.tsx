import { SignInPage } from "../pages/SignInPage";
import App from "../App";
import { SignUpPage } from "../pages/SignUpPage";
import { Routes, Route} from "react-router";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      } />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Routes>
  )
}