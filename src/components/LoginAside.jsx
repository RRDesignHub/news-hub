import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const LoginAside = () => {
  return (
    <div>
      <h3 className='text-xl font-bold text-gray-1 mb-4'>Login With</h3>
      <div className="flex flex-col gap-2">
        <button className="border border-[#58A7DE] rounded-md text-[#58A7DE] flex items-center justify-center gap-1 py-2">
          <FaGoogle></FaGoogle> Login With Google
          </button>
        <button className="border border-gray-800 rounded-md text-gray-800 flex items-center justify-center gap-1 py-2">
          <FaGithub></FaGithub> Login With GitHub
        </button>
        <button className="border border-[#58adde] rounded-md text-[#58adde] flex items-center justify-center gap-1 py-2">
          <FaXTwitter></FaXTwitter> Login With Twitter
        </button>
      </div>
    </div>
  )
}
