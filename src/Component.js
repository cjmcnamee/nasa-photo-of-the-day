import React from 'react';
import styled from 'styled-components'

export const CoolerDiv = styled.div`
  width: 100%;
  border: 2px solid black;
  border-radius: 8px;
`;

export const EvenCoolerDiv = styled.div`
  padding: 5%;
`;

export const CoolerH1 = styled.h1`
  color: red;
`;

export const CoolerImg = styled.img`
  width: 90%;
  border-radius: 8px;
  &:hover {
    box-shadow: 3px 3px 5px 5px blue;
  }
`;


const Component = (props) => {

  if(props.media_type === "image") {
    return (
      <CoolerDiv  className="appContainer">
        <CoolerH1 className="title">NASA: Photo of the Day</CoolerH1>
        <div className="imgContainer">
          <CoolerImg className="imgVideo" src={props.url}></CoolerImg >
        </div>

        <EvenCoolerDiv className="textContainer">
            <h2 className="titleText">{props.title}</h2>
            <p className="expText">{props.explanation}</p>
        </EvenCoolerDiv>
      </CoolerDiv >
    )
  } else {
    return (
      <CoolerDiv className="appContainer">
        <h1 className="title">NASA: Photo of the Day</h1>
        <div className="imgContainer">
          <iframe className="imgVideo" src={props.url}></iframe>
        </div>

        <EvenCoolerDiv className="textContainer">
            <h2 className="titleText">{props.title}</h2>
            <p className="expText">{props.explanation}</p>
        </EvenCoolerDiv>
      </CoolerDiv >
    )
  }
}

export default Component;
