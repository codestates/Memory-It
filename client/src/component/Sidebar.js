import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'
import diaryType from '../static/diaryType.png'
import mapType from '../static/mapType.png'
import colormapType from '../static/colormapType.png'
import modifyProfile from '../static/modifyProfile.png'
import setting from '../static/setting.png'
import logout from '../static/logout.png'
import contactUs from '../static/contactUs.png'
import githubid from '../static/githubid.png'

const LogoSection = styled.div`
  text-align: center;
`
const Logo = styled.img`
  width: 160px;
  height: 150px;
  margin: 15px;

`
const WelcomeSection = styled.div`
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
`
const SelectDiary = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const DiaryImg = styled.img`
  height: 1.2vw;
`

const SelectMap = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const MapImg = styled.img`
  height: 1.2vw;
`

const SelectColormap = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const ColormapImg = styled.img`
  height: 1.2vw;
`

const HorizenLine = styled.hr`
  width: 170px;
  border: none;
  border: 2px solid black;
`


const ModifyProfile = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const ModifyProfileImg = styled.img`
  height: 1.2vw;
`

const Setting = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const SettingImg = styled.img`
  height: 1.2vw;
`

const LogoutSection = styled.div`
  text-align: center;
`
const LogoutButton = styled.img`
  height: 2vw;
  &:hover {
    border: 2px solid green;
  }
`

const ContactZone = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
`
const ContactusImg = styled.img`
  height: 1.2vw;
`

const ids = ['cjhmoves33', 'jres1007', 'hit-that-drum', 'rkems0122']
const Members = styled.div`
  margin-left: 1.3vw;
  font-size: 1.1vw;
  margin-bottom: 5px;
`
const MembersImg = styled.img`
  height: 1.2vw;
`

// const StyledButton_type_first = styled.button`
//   position: relative;
//   width: 180px;
//   height: 60px;
//   margin: 20px;
//   line-height: 60px;
//   letter-spacing: 2px;
//   text-decoration: none;
//   text-transform: uppercase;
//   text-align: center;
//   color: var(--color-white);
//   transition: var(--speed-normal);
//   border: 1px solid var(--color-red);
//   &:hover {
//     border: 3px solid lightblue;
//   }
// `

// const StyledButton_type_second = styled.button`
//   position: relative;
//   width: 100px;
//   height: 60px;
//   margin: 20px;
//   line-height: 60px;
//   letter-spacing: 2px;
//   text-decoration: none;
//   text-transform: uppercase;
//   text-align: center;
//   color: var(--color-white);
//   transition: var(--speed-normal);
//   border: 1px solid var(--color-red);
//   &:hover {
//     border: 3px solid pink;
//   }
// `

function Sidebar() {
  return (
    <>
      <LogoSection>
        <Logo src={logo} />
      </LogoSection>
      <p />
      <WelcomeSection>김코딩님 반가워요!</WelcomeSection>
      <p />
      <SelectDiary><DiaryImg src={diaryType} /> 다이어리 형</SelectDiary>
      <SelectMap><MapImg src={mapType} /> 지도 형</SelectMap>
      <SelectColormap><ColormapImg src={colormapType} /> Color Map</SelectColormap>
      <HorizenLine />
      <ModifyProfile><ModifyProfileImg src={modifyProfile} /> 개인정보 수정</ModifyProfile>
      <Setting><SettingImg src={setting} />설정</Setting>
      <HorizenLine />
      <br /><br /><br />
      <LogoutSection><LogoutButton src={logout} /></LogoutSection>
      <br /><br /><br />
      <ContactZone><ContactusImg src={contactUs}/> Contact us!</ContactZone>
      {ids.map((id, idx) => (
        <Members key={idx}><MembersImg src={githubid} /> {id}</Members> 
      ))}
    </>
  )
}

export default Sidebar