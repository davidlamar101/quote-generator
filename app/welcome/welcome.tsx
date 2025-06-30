import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vvw] p-4">
            <img
              src={logoLight}
              alt="Quote Generator"
              className="block w-full dark:hidden"
            />

            <img
              src={logoDark}
              alt="Quote Generator"
              className="hidden w-full dark:block"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to the Quote Generator App
          </h1>
        </header>

        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What would you like to do?
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  className="group flex items-center gap-3 p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href="/"
                  >
                    View Quote Generator
                  </a>
              </li>
              <li>
                <a
                className="group flex items-center gap-3 p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                href="https://github.com/davidlamar101/quote-generator"
                target="_blank"
                rel="noreferrer"
                >
                  View on Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div> 
    </main>
  )
}