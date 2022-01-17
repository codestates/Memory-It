import React from 'react'
import styled from 'styled-components'
import { GrGithub } from 'react-icons/gr'
import { v4 } from 'uuid'

const ids = [
  'cjhmoves33 최재하 FullStack',
  'jres1007 정대희 BackEnd',
  'hit-that-drum 김혜영 FrontEnd',
  'rkems0122 서정원 FrontEnd',
]

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;

  /* height: 100vh; */
`

const ContactUs = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  /* height: 100%; */
  /* overflow: scroll; */
`
const Member = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  width: 250px;
  height: 70px;
  color: inherit;
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

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  transform: translateX(15%);
`

const ContactUsPage = () => {
  return (
    <Container>
      <ContactUs>
        {ids.map((id, idx) => (
          <Member key={v4()} href={`https://github.com/${id.split(' ')[0]}`}>
            <GithubIcon />
            <ContentWrapper>
              <span>{id.split(' ')[1]}</span>
              <span>{id.split(' ')[2]}</span>
            </ContentWrapper>
          </Member>
        ))}
      </ContactUs>
    </Container>
  )
}

export default ContactUsPage
