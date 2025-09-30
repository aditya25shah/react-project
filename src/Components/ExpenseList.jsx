import {React ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Expenses.css'
function ExpenseList({expenses}){

    const navigate = useNavigate();

    return (
        <div>
        <h2>Your Expenses</h2>
        {expenses.length === 0 ? (
            <p>No expenses added yet.</p>
        ) : (
            <table border="1" cellPadding="5">
            <thead>
                <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                <tr key={index}>
                    <td>{expense.title}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    <td>{expense.category}</td>
                </tr>
                ))}
            </tbody>
            </table>
            )}
        </div>
    );
}

export default ExpenseList