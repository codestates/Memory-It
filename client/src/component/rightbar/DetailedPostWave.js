import styled from 'styled-components'
import { diarytypeColors } from '../article/DiaryType'

const bgs = [
  'https://cdn.discordapp.com/attachments/929258976015691807/932908276037845012/y2.png',
  'https://cdn.discordapp.com/attachments/929258976015691807/932892685264617513/g.png',
  'https://cdn.discordapp.com/attachments/929258976015691807/932892685549838357/r.png',
  'https://cdn.discordapp.com/attachments/929258976015691807/932892664116961290/b.png',
  'https://cdn.discordapp.com/attachments/929258976015691807/932892685939912734/v.png',
]

export const WaveBackDrop = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  position: absolute;
  z-index: 0;
  bottom: 0;
  background: ${props => diarytypeColors[props.backdropColor - 1]};
  width: 450px;

  height: 30%;

  div {
    background: url(${props => bgs[props.bg - 1]});
  }
`
export const Wave = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 100%;

  background-size: 1000px 50px;
  width: 100%;
  height: 100px;

  animation: waving 15s linear infinite;
  @keyframes waving {
    0% {
      background-position-x: 1280px;
    }
    100% {
      background-position-x: 0px;
    }
  }

  &.wave-sec {
    opacity: 0.5;
    animation: waving2 11s linear infinite;
    @keyframes waving2 {
      0% {
        background-position-x: 0px;
      }
      100% {
        background-position-x: 1280px;
      }
    }
  }

  &.wave-third {
    opacity: 0.7;
    animation: waving3 15s linear infinite;
    @keyframes waving3 {
      0% {
        background-position-x: 0px;
      }
      100% {
        background-position-x: 1280px;
      }
    }
  }
`
