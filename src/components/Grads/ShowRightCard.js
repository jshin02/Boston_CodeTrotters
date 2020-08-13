import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
// import { useSpring, animated, config } from 'react-spring'

export const ShowRightCard = ({ id, imageUrl, name, identity, compliment, interests, linkedin, github, instagram, email, iconStyle }) => {
  // const slide = useSpring({
  //   from: { marginLeft: 500, marginRight: -500 },
  //   to: { marginLeft: 0, marginRight: 0 },
  //   config: config.slow
  // })

  return (
    <div className="slideLeft">
      <div data-id={id} style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '60%', height: '300px', alignSelf: 'flex-end', objectFit: 'cover', marginTop: '5px' }} />
        <h3 style={{ alignSelf: 'flex-end' }}>{name}</h3>
        <h6>Identity: {identity}</h6>
        <h6>Ideal Compliment: {compliment}</h6>
        <h6>Interests: {interests}</h6>
        <div className='social'>
          { linkedin && <FaLinkedin onClick={() => window.open(linkedin, '_blank')} style={iconStyle} /> }
          { github && <AiFillGithub onClick={() => window.open(github, '_blank')} style={iconStyle} /> }
          { instagram && <FaInstagram onClick={() => window.open(instagram, '_blank')} style={iconStyle} /> }
          { email && <AiOutlineMail onClick={() => window.open('mailto:' + email, '_blank')} style={iconStyle} /> }
        </div>
      </div>
    </div>
  )
}
