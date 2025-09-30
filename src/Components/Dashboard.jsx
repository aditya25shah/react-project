import { useLocation, Link } from "react-router-dom";
import React, { useState } from "react";
import '../Styles/Dashboard.css'
function Dashboard({ expenses }) {
    
    const location = useLocation();
    const username = location.state?.username;

    const [salary, setSalary] = useState(0);

    function handleSalary() {

        const salaryInput = document.getElementById("ghu").value;
        setSalary(Number(salaryInput));
        alert(`Salary set to ${salaryInput}`);

    }

    const totalExpenses = expenses.reduce(
        
        (sum, expense) => sum + Number(expense.amount),
        0
    );

    const savings = salary - totalExpenses;

    return (
        <div className="dash">
        <h1>Hello {username}</h1>

        <input id="ghu" type="number" placeholder="Set Your Salary" required />
        <button onClick={handleSalary}>Set</button>

        <div className="list">
            <p>Your Salary: {salary}</p>
            <p>Your Expenses Currently: {totalExpenses}</p>
            <p>Your Savings: {savings}</p>
        </div>

        <Link to="/addexpense">Add Expenses Here !!</Link> <br />
        <Link to="/expenses">See Your Expenses Here</Link>
        </div>
    );
}

export default Dashboard;
