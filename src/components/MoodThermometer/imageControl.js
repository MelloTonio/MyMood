import styled, { keyframes } from 'styled-components';

const GoAhead = (from, to) => keyframes`
  0% {
    transform: translate(${from}px);
  }

  100% {
    transform: translate(${to}px);
  }
`;

const changeBackground = (from, to) => keyframes`
  0% {
    background-color: #${from};
  }

  100% {
    background-color: #${to};
  }
`

export const ClockBox = styled.div`
  padding-right: 13px;
  width: 300px;
  height: 130px;
  margin-bottom: 150px;
  margin-top: 20px;
  background-color: ${props => props.propsMedium ? '#BC96E6' : (props.propsLeft ? '#FFCC33' : '#2E406F')};
  animation: ${props => props.propsMedium ? 'unset' : (props.propsLeft ? changeBackground('BC96E6', 'FFCC33') : changeBackground('BC96E6', '2E406F'))} 2.5s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: 800px){
    
      width: 100px;
      margin-bottom: 0px;
      height: 0px;
      margin-top: 450px;
      margin-left: 20px;
      
    }
`

export const FakeBody = styled.div`
  animation:${props => props.propsMedium ? 'unset' : (props.propsLeft ? changeBackground('AE759F', 'FF651D') : changeBackground('AE759F', '35393D'))} 2.5s forwards;
  background-color: ${props => props.propsMedium ? "#AE759F" : "null"};
  min-height: 100vh;
  width: 100vw;
  border: 1px solid black;

  @media(max-width: 800px){
      height: 1000px;
      max-width: 100vw;
    }
`


export const ImageControl = styled.div`
margin-left: 0;
margin-bottom: 80px;
animation: ${ props => props.propsLeft ? GoAhead(-400, 0) : GoAhead(400, 0)} 3s forwards;
margin-left: ${ props => `${props.goToLeft}px`};

@media(max-width: 800px){
      animation: ${ props => props.propsMedium ? GoAhead(-125, 0) : (props.propsLeft ? GoAhead(0, 125) : GoAhead(0, -125))} 2s forwards;
      margin-left: 0;
    }
`

export const Image = styled.img`
width: 125px;
height: 150px;

@media(max-width: 800px){
      width: 70px;
      height: 70px;
    }

`

export const Button = styled.button`

  width: 165px;
  height: 60px;
  border: none;
  color: white;
  border-radius: 5%;
  margin-bottom: 10px;
  background-color: rgb(178, 102, 83);
`

export const ButtonChange = styled.button`

  width: 60px;
  height: 20px;
  border: none;
  color: white;
  border-radius: 5%;
  background-color: rgb(178, 102, 83);
  font-size: 10px;

`