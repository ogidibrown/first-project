
import Inputfield from './inputfield';
// import { useHistory } from 'react-router-dom';
import {ConfirmButton} from './Button.style';
import {useAppContext} from './store/context';
import './signup.css';
import Images from '../src/images/bra2.png';
import {useHistory} from 'react-router-dom';

const Signup = () => {

    const {values, updateValues, Messages} = useAppContext()
    const history = useHistory()
    console.log(values);
    const submit = (e) =>{
        e.preventDefault();
        if(values.password !== values.confirmpassword) return Messages('passwords do not match')


        let json_object = JSON.stringify(values)
      
        
        
        fetch('http://localhost:5000/api/v1/signup', {
            method: 'POST',
            body: json_object,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            history.push('./login')
        })
    }

   

    return(

        <div className="signindiv">
           
            {/* {message && <h1>{message}</h1> } */}
            <div className="sformdiv">
                
                <div className="stextdiv">
                    <h1 className="signtextdiv">SignUp</h1>
                    <br/>
                    <h3 className="swelcome">Welcome to BROWNHOST</h3>
               
                </div>
                <div className="simgdiv">
                <img className="img" src={Images} alt="alter"/> 
                </div>

                
               
                
                <div className="sinputdiv">
                 <Inputfield className="input1" type="email" name="email" onChange={updateValues} placeholder="E-Mail" />
                 <Inputfield className="input2" type="password" name="password" onChange={updateValues} placeholder="PASSWORD"/>
                 <Inputfield className="input3" type="password" name="confirmpassword"  onChange={updateValues} placeholder="Confirm Password"/>

            </div>

           <div className="sbtndiv">
                 <ConfirmButton onClick={submit}>Confirm</ConfirmButton>

           </div>

                
                <div className="linkdiv">
                <a href='/login' alt='log'>Already have an account? login here </a>

                </div>
        

            </div>
            

        </div>
        

    )
}
    


export default Signup;