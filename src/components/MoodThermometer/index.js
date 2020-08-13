import React, { useState } from 'react';
import './App.css';

import data from './mood.json'

import { ImageControl, Image, FakeBody, ClockBox, Button, ButtonChange } from './imageControl'

function MoodThermomether() {

  const [mood, setMood] = useState(data.mood)
  const [mediumMood, setMediumMood] = useState(data.medium)

  let newDate = new Date()
  let happyMood = mood
  let medium = mediumMood
  let param = 0

  const minutes = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()
  const hour = `${newDate.getHours()}:${minutes}`

  let image = 'https://i.imgur.com/3euGEME.png'

  if (!happyMood && !medium) {
    image = 'https://i.imgur.com/AgJMP60.png'
  }
  else if (happyMood && !medium) {
    image = 'https://i.imgur.com/02eo09N.png'
  }

  const [changeMood, setChangeMood] = useState(false)
  const [myPassword, setMypassword] = useState('')

  function checkPass() {
    if (myPassword === 'mellumHappy') {
      setMood(true)
      setMediumMood(false)
    }
    if (myPassword === 'mellumMedium') {
      setMediumMood(true)
    }
    if (myPassword === 'mellumSad') {
      setMood(false)
      setMediumMood(false)
    }
  }

  if (!medium) param = happyMood ? 800 : -800


  return (
    <FakeBody propsLeft={happyMood} propsMedium={medium}>
      <div className="container">
        <ClockBox propsMedium={medium} propsLeft={happyMood}>
          <div className="hour-text">
            <div className="text">{hour}</div>
          </div>
          <div className="date"><h4>{newDate.getDate()}/{newDate.getMonth()}/{newDate.getFullYear()}</h4></div>
        </ClockBox>
        <div className="emotions">
          <div className="emote1">
            <img className="image" height="45" width="45px" src={require('../../images/sad.png')} alt="sad" />
          </div>
          <div className="emote3">
            <img height="50" width="50px" src={require('../../images/neutral.png')} alt="neutral" />
          </div>
          <div className="emote2">
            <img height="60" width="100px" src={require('../../images/hug.png')} alt="hug" />
          </div>
        </div>
        <div className="humor-percent">
          <div className="slider">
            <div className="ball"></div>
            <ImageControl goToLeft={param} goToRight={param} propsLeft={happyMood} propsMedium={medium}>
              <Image src={image} />
            </ImageControl>
            <div className="ball"></div>
          </div>
        </div>
      </div>
      <div className="buttonFather">
        {!changeMood && <div><Button onClick={() => setChangeMood(true)}>Change</Button></div>}
        {changeMood &&
          <div className="motherButton">
            <input className="input" onChange={(e) => setMypassword(e.target.value)} /> <ButtonChange onClick={checkPass}>Change</ButtonChange>
          </div>
        }
      </div>
    </FakeBody >);
}

export default MoodThermomether;
