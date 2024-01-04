'use client'
import Navbar from './components/Navbar'
import Header from './components/Header'
import TodoList from './components/Todolist'
import Footer from './components/Footer'



export default function Home() {
  return (
    
    <>
    
      <div class="blurdiv"></div>

      <div class="blurdiv2"></div>
      <div className="position-relative" style={{ zIndex: "9999" }}></div>
      <div
        className="grid place-items-center h-screen px-6 font-sans position-relative"
        style={{ zIndex: "99999" }}
      >
        <Navbar />

        <div className="w-full max-w-3xl">
          <div className=" shadow-lg rounded-lg p-6 bg- todo-body">
            <Header />

            <hr className="mt-4 text-gray-400" />

            <TodoList />

            <hr className="mt-4 text-gray-400" />

            <Footer />
          </div>

          <div className="text-center text-gray-500 text-xs mt-4">
            <p className="font-stylee">
              Made with{" "}
              <span role="img" aria-label="heart">
                
              </span>{" "}
              by{" "}
              <a
                href="https://www.linkedin.com/in/jahid8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mehedi-hassan-sohan
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
