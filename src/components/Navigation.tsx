export default function Navigation() {
  return (
    <header className="overflow-hidden rounded-md text-slate-700 shadow-md [font-family:Inter,ui-sans-serif,system-ui,sans-serif] font-medium tracking-normal">
      <nav>
        <ul className="relative flex w-full items-stretch">
          <li
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/2 bg-slate-100 [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]"
          />
          <li
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-1/2 bg-blue-100 [clip-path:polygon(6%_0,100%_0,100%_100%,0_100%)]"
          />
          <li className="relative z-10 flex flex-1 justify-center p-4">
            <a className="rounded-md px-4 py-2 transition-colors hover:text-cyan-800" href="/">
              Specify your migraine
            </a>
          </li>
          <li className="relative z-10 flex flex-1 justify-center p-4">
            <a className="rounded-md px-4 py-2 transition-colors hover:text-cyan-800" href="/statistics">
              Statistics
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
