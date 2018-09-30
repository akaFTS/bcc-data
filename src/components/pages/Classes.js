import React from 'react'
import ClassList from '../classes/ClassList'
import AreaBubbles from '../classes/AreaBubbles'

const Classes = () => {
  return (
    <main className="flex">
      <div className="w-100 w-two-thirds-l ph2">
        <ClassList />
      </div>
      <div className="w-100 w-third-l ph2">
        <AreaBubbles />
      </div>
    </main>
  )
}

export default Classes
