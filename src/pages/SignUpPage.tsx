import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabase";

export const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    })

    if (error) {
      setErrorMessage(error.message);
      return
    }

    setSuccessMessage("Account created. Check your email or sign in.")
    navigate("/signin")
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="email"
              className="border border-gray-300 p-2 rounded"
              placeholder="E-Mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="password"
              className="border border-gray-300 p-2 rounded"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="password"
              className="border border-gray-300 p-2 rounded"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </label>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
          <button
            type="submit"
            className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600 hover:cursor-pointer w-full"
          >
            Sign Up
          </button>

          <div>
            Already have an account?
            <a
              href="/signin"
              className="text-blue-500 hover:underline"
            >
             Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
