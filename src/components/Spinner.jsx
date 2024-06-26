import React from 'react'
import spinner from "../assets/svg/spinner.svg";

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items justify-center fixed left-0 right-0 bottom-0 top-0 z-40">
        <div>
            <img src={spinner} alt="Loading..." className='h-24 items-center' />
        </div>
    </div>
  )
}
