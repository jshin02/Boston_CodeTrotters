import React from 'react'
import Segments from './Segments'

const groups = [
  {
    id: 1,
    name: 'Instructors',
    path: '/Instructors'
  },
  {
    id: 2,
    name: 'Students',
    path: '/Students'
  },
  {
    id: 3,
    name: 'Grads',
    path: '/gradIndex'
  }]

const Groups = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    height: '90vh'
  }
  return (
    <div style={containerStyle}>
      {groups.map(group => (
        <Segments
          key={group.name}
          type={group.name}
          path={group.path} />
      ))}
    </div>
  )
}

export default Groups
