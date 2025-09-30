import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ExpenseList from "./Components/ExpenseList";
import Signup from "./Components/Signup";
import AddExpense from "./Components/AddExpense";
import React, { useState } from "react";

function App() {
  
  const [expenses, setExpenses] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/addexpense"
          element={<AddExpense expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard expenses={expenses} />}
        />
        <Route
          path="/expenses"
          element={<ExpenseList expenses={expenses} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
