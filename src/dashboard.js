

import {useAppContext}from './store/context';


const Dashboard = () =>{

    const {Brandname} = useAppContext()

    return(
        <div>
            <h1>{Brandname}</h1>

            <h3>SHOPPING DASHBOARD</h3>
            <ul>
                <li>Car</li>
                <li>computers</li>
                <li>shirts</li>
                <li>Phones</li>
            </ul>
        </div>

    )
}

export default Dashboard;