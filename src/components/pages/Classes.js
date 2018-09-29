import React from 'react'
import ClassList from '../classes/ClassList'
import AreaBubbles from '../classes/AreaBubbles'
import ClassesProvider from '../classes/ClassesProvider'

const Classes = () => {
  return (
    <ClassesProvider>
      <main className="flex">
        <div className="w-100 w-two-thirds-l ph2">
          <ClassList />
        </div>
        <div className="w-100 w-third-l ph2">
          <AreaBubbles />
        </div>
      </main>
    </ClassesProvider>
  )
}

export default Classes
