import React, { useEffect } from 'react'
import { assignGrad } from '../../api/auth'

const Test = props => {
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  // const containerStyle = {
  //   border: '1px solid black',
  //   display: 'flex',
  //   flexFlow: 'column wrap',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
  // const test = event => {
  //   console.log('hey')
  // }
  useEffect(() => {
    console.log(props.user.name)
    assignGrad(props.user.name)
      .then(res => console.log(res))
      .catch(() => console.log('this is not working.'))
  }, [])

  return (
    <div>
      <h2>hello</h2>
      <h3>{props.user.name}</h3>
    </div>
  )
}

export default Test
