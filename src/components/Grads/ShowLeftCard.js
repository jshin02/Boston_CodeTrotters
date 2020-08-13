import React from 'react'
// import { useSpring, animated, config } from 'react-spring'

export const ShowLeftCard = ({ id, content, advice, endorsements }) => {
  // const slide = useSpring({
  //   from: { marginLeft: -500, marginRight: 500 },
  //   to: { marginLeft: 0, marginRight: 0 },
  //   config: config.slow
  // })
  return (
    <div className='slideRight'>
      <div data-id={id} style={{ height: '70vh' }}>
        { content &&
        <div>
          <h5>Message to CodeTrotters</h5>
          <p>{content}</p>
        </div>
        }
        { advice &&
        <div>
          <h5>Advice to Jr. Developers</h5>
          <p>{advice}</p>
        </div>
        }
        { endorsements &&
        <div>
          <h5>Endorsement Requests</h5>
          <p>{endorsements}</p>
        </div>
        }
      </div>
    </div>
  )
}
