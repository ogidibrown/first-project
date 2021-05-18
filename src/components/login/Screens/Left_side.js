import {
  useEffect,
  useState,
} from 'react';

import styled from 'styled-components';

import logo from '../../../brand.gif';
import {
  BlackHeaderText,
  BlackHeaderTextBigger,
  BlackTextDeem,
  LighterTextDeem,
} from '../../global/Text';

const Body = styled.div`
  margin-left: 13%;
  /* margin-right: 60px; */
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const BrandSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const TextField = styled.input`

  height: 45px;
  border-radius: 3px;
  width: 400px;
  color: #dadddf;
  outline: none;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid beige;
`;

const Button = styled.button`
  height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  width: 415px;
  text-align: center;
  outline: none;
  border: none;
  background-color: #6a2cd8;
`;
const Line = styled.hr`
  color: blue;
  align-self: center;
  width: 415px;
  margin-top: 30px;
  margin-right: 25px;
  display: block;
  border: none;
  height: 1px;
  background: #0071b9;
  background: linear-gradient(
    to right,
    white,
    #0071b9,
    #26abff,
    #0071b9,
    white
  );
`;

const Spacer = styled.div`
margin-top: 10px;
`

const LeftSide = ({ onChangeUsername, onChangePassword, password, confirmPassword, onChangeConfirmPassword }) => {
    const [color, updateColor] = useState('#6a2cd8');

    useEffect(
        () => {
            console.log(`${password} and ${confirmPassword}`)
            if (password === confirmPassword) {
                updateColor('#6a2cd8')
            } else {
                updateColor('red')
            }
        }, [confirmPassword, password]
    )


    return (
        <Body>
            <BrandSection>
                <BrandLogo src={logo} />
                <BlackHeaderText>Discovery Gift</BlackHeaderText>
            </BrandSection>
            <BlackHeaderTextBigger>Sign up.</BlackHeaderTextBigger>
            <LighterTextDeem>
                Sign up with your data that you will use <br /> to login later on
      </LighterTextDeem>

            <BlackTextDeem>Enter your email address</BlackTextDeem>

            <TextField type='email' placeholder="name@example.com" onChange={onChangeUsername} style={{ borderBottomColor: '#6a2cd8' }} />
            <Spacer />
            <BlackTextDeem>Enter your password</BlackTextDeem>
            <TextField type='password' placeholder="@ least 8 characters" onChange={onChangePassword} style={{ borderBottomColor: `${color}` }} />
            <Spacer />
            <BlackTextDeem>Confirm your password</BlackTextDeem>
            <TextField type='password' placeholder="@ least 8 characters" style={{ borderBottomColor: 'blue' }} onChange={onChangeConfirmPassword} />
            <Spacer />
            <Button>
                <LighterTextDeem style={{ textAlign: "center" }}>
                    Sign up
        </LighterTextDeem>
            </Button>

            <Line />
            <LighterTextDeem style={{ alignSelf: "center" }}>
                Already has an account?<span style={{ color: "#6a2cd8" }}> Login </span>
            </LighterTextDeem>
        </Body>
    );
};

export default LeftSide;
