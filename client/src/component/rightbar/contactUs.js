import React from 'react'
import styled from 'styled-components'
import { GrGithub } from 'react-icons/gr'

const ids = [
  'cjhmoves33 > 최재하',
  'jres1007 > 정대희',
  'hit-that-drum > 김혜영',
  'rkems0122 > 서정원',
]

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.4);
`

const ContactUs = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h1 {
    color: white;
  }
`
const Member = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 250px;
  height: 70px;
  color: white;
  font-size: 1rem;
  margin: 0.8rem;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`
const GithubIcon = styled(GrGithub)`
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
`

const ContactUsPage = () => {
  return (
    <Container>
      <ContactUs>
        <h1>Contact Us</h1>
        {ids.map((id, idx) => (
          <Member key={idx} href={`https://github.com/${id.split('>')[0]}`}>
            <GithubIcon />
            {id}
          </Member>
        ))}
      </ContactUs>
    </Container>
  )
}

export default ContactUsPage
