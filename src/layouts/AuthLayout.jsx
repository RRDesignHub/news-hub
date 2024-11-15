import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const AuthLayout = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen font-nunito">
        <header className="w-11/12 mx-auto py-4 mb-10">
          <Navbar></Navbar>
        </header>
        {/* dynamic section */}
        <Outlet></Outlet>
        <footer className="bg-white">
          <Footer></Footer>
        </footer>
      </div>
    </>
  )
}
