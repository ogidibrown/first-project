import Inputfield from './inputfield';
import { useHistory } from 'react-router-dom';
import {LoginButton2, SignupButton2} from './Button.style';
import {useAppContext} from './store/context';
import './login.css';
import Images from '../src/images/log1.jpg';
import {useState} from 'react';


const Login = () => {

    const {updateValues, values} = useAppContext({})
    let History = useHistory();
    const [message, setmessage] = useState('')

    const submit = (e) =>{
        e.preventDefault();
        let json_object = JSON.stringify(values)

        fetch('http://localhost5000/api/v1/login', {
            method: 'post',
            body: json_object,
            headers: {
                "Content-type": "application-json"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success){
                History.push('./dashboard')
            }
            else{
                setmessage(response.message)
            }
        })
    }
    const gotoSignup= (e) =>{
        History.push('/signup')
        e.preventDefault();
    }

    console.log(values);

    return(
        <div className="logindiv">
            <div>
                <h1>{message}</h1>
            </div>
           
            {/* <div className="picdiv">
                </div> */}
            <div className="formdiv">
                
                <div className="textdiv">
                    <h1 className="logtextdiv">LOGIN</h1>
                    <br/>
                    <h3 className="welcome">Welcome back to BROWNHOST</h3>
               
                </div>
                <div className="imgdiv">
                <img className="img" src={Images} alt="alter"/> 
                </div>

                
               
                
                <div className="inputdiv">
                 <Inputfield className="input1" type="text" name="Username" onChange={updateValues} placeholder="USERNAME" />
                 <Inputfield className="input2" type="password" password="password" onChange={updateValues} placeholder="PASSWORD"/>
            </div>

           <div className="btndiv">
                 <LoginButton2 onClick={submit}>Login</LoginButton2>
                 <SignupButton2 onClick={gotoSignup}>Signup</SignupButton2>

           </div>

                
                <div className="pass">
                    <h3 className="fr">Forgotten Password?</h3>
                </div>
        

            </div>
            

        </div>
        

    )
}


export default Login;