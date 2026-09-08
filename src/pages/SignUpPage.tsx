
export const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
        <form action="submit" className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <label className="flex flex-col gap-2 w-full">
            <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Username" />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input type="email" className="border border-gray-300 p-2 rounded" placeholder="E-Mail" />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input type="password" className="border border-gray-300 p-2 rounded" placeholder="Password" />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input type="password" className="border border-gray-300 p-2 rounded" placeholder="Confirm Password" />
          </label>
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