import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
export const SocialFollow = () => {
  return (
    <div>
      <h3 className='text-xl font-bold text-gray-1 mb-3'>Find Us On</h3>
      <div className=" join flex join-vertical *:join-item *:text-gray-2 *:font-medium">
        <button className="border  rounded-md flex items-center gap-2 p-4">
          <FaFacebook className="text-[#3B599C] text-2xl"></FaFacebook> Facebook
          </button>
        <button className="border  rounded-md flex items-center gap-2  p-4">
          <FaSquareXTwitter className="text-[#58A7DE] text-2xl"></FaSquareXTwitter> Twitter
        </button>
        <button className="border  rounded-md  flex items-center gap-2  p-4">
          <FaSquareInstagram className="text-2xl text-[#D82D7E]"></FaSquareInstagram> Instagram
        </button>
      </div>
    </div>
  )
}
