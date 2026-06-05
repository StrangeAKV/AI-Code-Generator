import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light'
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDarkTheme) {
      root.classList.add('dark-theme')
      root.classList.remove('light-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light-theme')
      root.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  return (
    <div className="nav flex items-center justify-between px-[100px] h-[90px] border-b-[1px] border-gray-800">
      <div className="logo">
        <h3 className='text-[25px] font-[700] sp-text'>GenUI</h3>
      </div>
      <div className="icons flex items-center gap-[15px]">
        <button
          type="button"
          onClick={toggleTheme}
          className="icon"
          aria-label="Toggle light and dark mode"
        >
          {isDarkTheme ? <HiSun /> : <HiMoon />}
        </button>
        <div className="icon"><FaUser /></div>
        <div className="icon"><RiSettings3Fill /></div>
      </div>
    </div>
  )
}

export default Navbar