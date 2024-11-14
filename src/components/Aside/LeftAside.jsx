import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res=> res.json())
      .then(datas=>setCategories(datas.data.news_category));
  },[])

  return (
    <div className=" ">
      <h3 className='text-xl font-bold text-gray-1'>All Category</h3>
      <div className="flex max-sm:flex-wrap md:flex-col gap-2 mt-5 ">
        {
          categories.map(category=><NavLink 
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `text-xl font-semibold py-1 md:py-3 max-sm:px-2 ps-2 lg:ps-8 rounded-md ${isActive ? 'bg-[#E7E7E7]  text-gray-1' : 'bg-transparent text-[#9F9F9F]'}`
            }
            key={category.category_id}
            >{category.category_name}</NavLink>)
        }
      </div>
    </div>
  )
}
