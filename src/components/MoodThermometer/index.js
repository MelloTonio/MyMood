import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { ImageControl, Image, FakeBody, ClockBox, Button, ButtonChange } from './imageControl'

function MoodThermomether() {

  const [mood, setMood] = useState(null)
  const [mediumMood, setMediumMood] = useState(null)

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


  useEffect(() => {
    async function getData() {
      const URL = 'https://moderreact.herokuapp.com/states';
      const response = await fetch(URL);
      const data = await response.json();
      setMood(data[0].happy)
      setMediumMood(data[0].medium)
    }
    getData()
  }, [])


  function checkPass() {
    if (myPassword === 'mellumHappy') {
      axios.put('https://moderreact.herokuapp.com/states/1', {
        id: 1,
        happy: true,
        medium: false
      }).then(resp => {
        setMood(resp.data.happy)
        setMediumMood(resp.data.medium)
      })
    }
    if (myPassword === 'mellumMedium') {
      axios.put('https://moderreact.herokuapp.com/states/1', {
        id: 1,
        happy: false,
        medium: true
      }).then(resp => {
        setMood(resp.data.happy)
        setMediumMood(resp.data.medium)
      })
    }
    if (myPassword === 'mellumSad') {
      axios.put('https://moderreact.herokuapp.com/states/1', {
        id: 1,
        happy: false,
        medium: false
      }).then(resp => {
        setMood(resp.data.happy)
        setMediumMood(resp.data.medium)
      })
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
