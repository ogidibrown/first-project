import './landingpage.css';
import landingcompo from '../src/components/landingcompo.module.css'
import { useHistory } from 'react-router-dom';
import {LoginButton, SignupButton} from './Button.style';
import {Aboutus, Events} from './Button.style';
import Select from './select';
import Image from '../src/images/brandy.jpg';
import {useAppContext} from '../src/store/context';



const Landingpage = () => {

    const {updateValues} = useAppContext({})


    const History = useHistory();
    const gotoLogin= (e) =>{
        History.push('/login')
        e.preventDefault();
    }
    const gotoSignup= (e) =>{
        History.push('/signup')
        e.preventDefault();
    }
    



    return(
             
        <div className= "mainlp">
                <div className="toplp">
                    <div className="lefttoplp">
                        <img className="imgs" src={Image} alt="alter"/>
                        <h1 className="brand">BROWNHOST</h1>
                     </div>


                   <div className="righttoplp">
                    <LoginButton onClick={gotoLogin}><h3 className ="log">Login</h3></LoginButton>
                    <SignupButton onClick={gotoSignup}><h3 className ="log">Signup </h3></SignupButton>
                     
                 </div>
            
                 
    

                 </div>
                 <div className="downlp">
                    <div className="topdownlp">
                    <h1 className= {landingcompo.textone}>Find Your Next Hostel</h1>
                        <h3 className={landingcompo.texttwo}>You are just a step away from your comfortable hostel with a single click</h3>
                     </div>
                     <div className="middledownlp">
                     <div style={{display:'flex', border:'2px solid white', borderRadius:20, width:450, height:50,  backgroundColor:'white', alignItems:'center', justifyContent:"center"}}>
                            <input style={{border:'none',paddingLeft:1, marginLeft:5, outline:'none', width:300, height:40, }} type="text" placeholder="search for your region" />
                            <button className={landingcompo.searchbtn}>Search</button>
                        </div>

                     </div>

                     <div className="downdownlp">
                             <label className={landingcompo.visit}>Visit your School:</label>
                             <Select onChange={updateValues} className="select"/>
                            <Aboutus><h3 className ="log">About Us</h3></Aboutus>
                            <Events><h3 className ="log">Events</h3></Events>

                     </div>



                 </div>
                     
            
                
    

        </div>


           
    )
}


export default Landingpage;
