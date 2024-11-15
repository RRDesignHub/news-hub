import { Outlet } from "react-router-dom"
import { LeftAside } from "../components/Aside/LeftAside"
import { RightAside } from "../components/Aside/RightAside"
import { Header } from "../components/Header"
import { LatestNews } from "../components/LatestNews"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const HomeLayout = () => {
  return (
    <div className="font-nunito">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <nav className="w-11/12 mx-auto py-2">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto md:grid grid-cols-12 max-sm:space-y-8 gap-5 my-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <aside className="col-span-6">
          <Outlet></Outlet>
        </aside>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
