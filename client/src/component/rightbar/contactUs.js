import React from 'react'
import styled from 'styled-components'

const ids = ['cjhmoves33', 'jres1007', 'hit-that-drum', 'rkems0122']

const ContactUs = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  width: 100%;
`
const Member = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  margin: 0.5rem;
`

const ContactUsPage = () => {
  return (
    <>
      <ContactUs>
        Contact Us
        {ids.map((id, idx) => (
          <Member key={idx} href={`https://github.com/${id}`}>
            {id}
          </Member>
        ))}
      </ContactUs>
    </>
  )
}

export default ContactUsPage
