import logoImg from '../assets/logo.png';
import moment from 'moment';
export const Header = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center py-5'>
        <img className='w-[300px] lg:w-[450px]' src={logoImg} alt="" />
        <h3 className='text-[#706F6F] text-lg mt-3'>Journalism Without Fear or Favour</h3>
        <h3 className='text-gray-1 text-xl font-medium'>{moment().format('ddd, MMM Do YYYY')}</h3>
      </div>
    </>
  )
}
