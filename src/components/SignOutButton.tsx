import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/signin")
  }

  return(
    <button
      onClick={handleSignOut}

      className="absolute right-4 rounded bg-violet-400 p-2 text-white hover:bg-violet-500 hover:cursor-pointer"
    >
      Sign Out
    </button>
  )
}