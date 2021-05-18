import {
  Fragment,
  useState,
} from 'react';

import styled from 'styled-components';

import * as screens from './login/Login_export';

const Body = styled.main`

  display: flex;
  width: 100vw;
  justify-content: center;
  height: 97.1vh;
`;
const LeftSide = styled.div`
  width: 35%;
`;

const RightSide = styled.div`
  background-color: #F9F6FD;
  width: 75%;
`;
/// This is the main display of the website.
/// It will be  the house for all the two main component hub

const MainApp = () => {
  const [done, setDone] = useState("10");

  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");

  const updateDate = (event) => {
    console.log(event.target.value.length);
    if (event.target.value.length > 0 && done < 40) {
      let total = parseInt(done) + 30;
      setDone(`${total}`);
    } else if (done > 40) {
      console.log('reach')
    }
    else {
      setDone(`${done - 33}`);
    }
  };

  const passwordHasValue = (event) => {
    updatePassword(event.target.value);
    if (event.target.value != null) {
      // setDone(`${done + 33}`);
    }
  };

  const confirmPasswordHasValue = (event) => {
    updateConfirmPassword(event.target.value);
  };
  return (
    <Fragment>

      <Body>
        <LeftSide>
          <screens.LeftSide
            onChangeUsername={updateDate}
            onChangePassword={passwordHasValue}
            onChangeConfirmPassword={confirmPasswordHasValue}
            password={password}
            confirmPassword={confirmPassword}
          ></screens.LeftSide>
        </LeftSide>
      </Body>
    </Fragment>
  );
};

export default MainApp;
