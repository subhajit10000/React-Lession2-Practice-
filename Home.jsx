import { NavLink } from 'react-router-dom'
import banner from '../assets/banner.jpg';
function Home() {
  return (
    <div className="relative w-full h-168 overflow-hidden">

      <img
        className="w-full h-full object-cover"
        src={banner}
        alt="Background"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[3rem] font-bold font-sans drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] m-0 z-10 whitespace-nowrap">
        Learn <span className="text-yellow-300 font-bold">MERN</span> Stack
      </h1>

      <h2 className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.5rem] font-normal font-serif drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] m-0 z-10 whitespace-nowrap">
        Master the Full-Stack Development
      </h2>

      <NavLink to="/Courses">
  <button
    className="
      absolute
      top-[56%]
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      bg-gradient-to-r
      from-red-500
      via-pink-500
      to-orange-500
      hover:from-red-600
      hover:via-pink-600
      hover:to-orange-600
      text-white
      border-none
      px-5 py-3
      sm:px-6 sm:py-3
      md:px-8 md:py-4
      text-base
      sm:text-lg
      md:text-xl
      font-bold
      rounded-xl
      shadow-lg
      hover:shadow-2xl
      cursor-pointer
      z-10
      transition-all
      duration-300
      ease-in-out
      hover:scale-105
      whitespace-nowrap
    ">
    Get Started
  </button>
</NavLink>
    </div>
  );
}

export default Home;
