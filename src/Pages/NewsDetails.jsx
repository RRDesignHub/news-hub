import { Link, useLoaderData } from "react-router-dom"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RightAside } from "../components/Aside/RightAside";
import { FaArrowLeft } from "react-icons/fa";
export const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <div className="w-11/12 mx-auto md:grid grid-cols-12 gap-6 my-5 max-sm:space-y-8 font-nunito">
        <div className="col-span-9">
          <h2 className="text-xl font-bold text-gray-1">News Hub</h2>
          <div className="divider mt-0"></div>
          <div className="card card-compact bg-base-100 shadow-lg">
            <figure>
              <img
              className="w-full"
                src={news?.image_url}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-gray-1">{news?.title}</h2>
              <p className="text-gray-2">{news?.details}</p>
              <div className="card-actions mt-5">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] hover:bg-[hsl(344,74%,30%)] text-white trxt-xl font-medium"><FaArrowLeft></FaArrowLeft> Back To News Category</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
            <RightAside></RightAside>
        </div>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
