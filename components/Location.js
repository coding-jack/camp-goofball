import React from 'react'

const Location = () => {
  return (
    <div name="Location" id="#location" className="p-12">
      <h2>Location</h2>
      <div className="grid grid-cols-4">
        <div className="col-span-2 relative">
          <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src="https://via.placeholder.com/150" alt="" />
          <p className="z-0 absolute inset-0 text-center p-auto">A bunch of words Location what this event is Location.</p>
        </div>
        <div className="col-span-2 relative">
          <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src="https://via.placeholder.com/150" alt="" />
          <p className="z-0 absolute inset-0 text-center p-auto">The Second part of the content.</p>
        </div>
      </div>
    </div>
  )
}

export default Location;
