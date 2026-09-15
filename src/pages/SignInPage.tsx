
import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router"
import { supabase } from "../lib/supabase"

export const SignInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setErrorMessage("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMessage(error.message)
      return
    }

    navigate("/")
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold">Sign In</h2>
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
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600 w-full hover:cursor-pointer"
          >
            Sign In
          </button>

          <div>
            Don't have an account?
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
            >
             Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
