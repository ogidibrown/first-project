import Inputfield from './inputfield';
import { useHistory } from 'react-router-dom';
import {LoginButton2, SignupButton2} from './Button.style';
import {useAppContext} from './store/context';
import './login.css';
import Images from '../src/images/bra2.png';



const Login = () => {




    const {updateValues, values} = useAppContext({})
    let history = useHistory();


    const submit = (e) =>{
        e.preventDefault();
        let json_object = JSON.stringify(values)

        fetch('http://localhost:5000/api/v1/login', {
            method: 'POST',
            body: json_object,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success){
                history.push('./dashboard')
            }else if(response.failure){
                alert("Wrong User or Password");
            } else if (response.goaway){
                alert("User doesn't exist... Please Signup!!!");
            }
            },
            (err)=> console.log(err)
        );
    }
    const gotoSignup= (e) =>{
        history.push('/signup')
        e.preventDefault();
    }

    console.log(values);

    return(
        <div className="logindiv">
            {/* <div>
                <h1>{message}</h1>
            </div> */}
           
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
                 <Inputfield className="input1" type="text" name="email" onChange={updateValues} placeholder="USERNAME" />
                 <Inputfield className="input2" type="password" name="password" onChange={updateValues} placeholder="PASSWORD"/>
            </div>

           <div className="btndiv">
                 <LoginButton2 onClick={submit} onChange={onchange}>Login</LoginButton2>
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