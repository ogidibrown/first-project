import { Fragment } from 'react';

import styled from 'styled-components';

import animationData from './register.json';

const Body = styled.div`
  margin-left: 13%;
  /* margin-right: 60px; */
  margin-top: 100px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSide = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Body>
        {/* <BlackHeaderText style={{ fontWeight: "normal", margin: "0px" }}>
          Nice to have you here
        </BlackHeaderText>
        <BlackHeaderTextBigger
          style={{ fontSize: "50px", margin: "0px", color: "#6a2cd8" }}
        >
          Happy Hacking
        </BlackHeaderTextBigger>
        <Lottie options={defaultOptions} height={400} width={500} /> */}
      </Body>
    </Fragment>
  );
};

export default RightSide;
