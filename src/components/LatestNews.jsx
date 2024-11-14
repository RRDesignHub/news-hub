import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

export const LatestNews = () => {
  return (
    <div className="md:w-11/12 mx-auto ">
      <div className="flex items-center bg-[#F3F3F3] p-2 rounded-md gap-2">
        <Link to='/news' className="bg-[#D72050] text-white text-xl font-medium px-5 py-2 rounded-md">Latest</Link>
        <div>
          <Marquee pauseOnHover={true} className="text-lg font-semibold text-gray-1 ">
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...!</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          </Marquee>
        </div>
      </div>
    </div>
  )
}
