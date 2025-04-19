import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className='container flex justify-between mx-auto items-center py-5 px-5'>
      <div>
        <h1 className='cursor-pointer text-4xl font-bold'>Pomodoro Timer</h1>
      </div>
      <div>
        <nav>
          <button className='cursor-pointer'>Setting</button>
        </nav>
      </div>
    </header>
  )
}

export default Header