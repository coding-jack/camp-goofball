import React from 'react'

const Lineup = () => {
  return (
    <div name="lineup" id="#lineup" className="pt-6 md:p-12">
      <h2 className="text-5xl p-2 md:p-6">Lineup</h2>
      <div className="grid grid-cols-4">
        <div className="col-span-4">
          <img className="z-10 mx-auto max-h-screen" src="/images/CGB-Poster.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Lineup;
