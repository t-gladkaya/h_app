import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children}: ProtectedRouteProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setIsAuthenticated(Boolean(data.session));
      setIsLoading(false);
    }

    checkSession();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return children
}