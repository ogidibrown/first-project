
import Inputfield from './inputfield';
import { useHistory } from 'react-router-dom';
import {ConfirmButton} from './Button.style';
import {useAppContext} from './store/context';
import './signup.css';
import Images from '../src/images/log1.jpg';

const Signup = () => {

    const {updateValues} = useAppContext({})
    const History = useHistory();

    const gotoLogin= (e) =>{
        History.push('/login')
        e.preventDefault();
    }
   

    return(

        <div className="signindiv">
           
            {/* <div className="picdiv">
                </div> */}
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
                 <Inputfield className="input2" type="password" password="password" onChange={updateValues} placeholder="PASSWORD"/>
                 <Inputfield className="input3" type="password" password="password" onChange={updateValues} placeholder="Confim Password"/>

            </div>

           <div className="sbtndiv">
                 <ConfirmButton onClick={gotoLogin}>Confim</ConfirmButton>

           </div>

                
                <div className="linkdiv">
                <a href='/login' alt='log'>Already have an account? login here </a>

                </div>
        

            </div>
            

        </div>
        

    )
}
    


export default Signup;