import { useLocation }  from "react-router-dom"
import {React, useState} from 'react'
import {Link} from 'react-router-dom'
function Dashboard(){

    const location = useLocation();
    const username = location.state?.username;
    const[salary,setsalary] = useState(0);
    
    function handlesalary(){
        alert(`Salary set to ${salary}`);
    }

    return(
        <div className="dash">
            <h1> Hello {username} </h1>
            <input
            value={salary}
            onChange={(e) => setsalary(Number(e.target.value))}
            type="number"
            placeholder="Set Your Salary"
            required/>
            <button onClick={handlesalary}>Set</button>
            <div className="list">
                <p> Your Salary : {salary}</p>
                <p> Your Expenses Currently : {expensevalue}</p>
                <p> Your Savings are : {salary - expense} </p>

            </div>
            <Link to="/addexpense">Add Expenses Here !!</Link>
            <Link to="/ExpenseList">See Your Expenses Here</Link>
        </div>
    );
}

export default Dashboard