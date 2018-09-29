import React from 'react'
import Propposal from '../information/Propposal'
import Schedule from '../information/Schedule'
import Evolution from '../information/Evolution'

const Information = () => {
  return (
    <main>
      <div className="flex">
        <div className="w-100 w-50-l ph2">
          <Propposal />
        </div>
        <div className="w-100 w-50-l ph2">
          <Schedule />
        </div>
      </div>
    </main>
  )
}

export default Information
