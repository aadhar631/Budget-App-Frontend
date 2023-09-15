import React, { useContext, useState } from 'react';
import axios from 'axios';

// Define the base URL for your API
const BASE_URL = "http://localhost:5000/api/v1/";

// Create a global context for sharing state among components
const GlobalContext = React.createContext();

// GlobalProvider component for managing global state
export const GlobalProvider = ({ children }) => {
    // Define state variables for incomes, expenses, and errors
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // Function to add an income entry
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message);
            });
        getIncomes(); // Refresh the list of incomes
    };

    // Function to get a list of incomes
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data); // Update the incomes state
    };

    // Function to delete an income entry
    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes(); // Refresh the list of incomes
    };

    // Function to calculate the total income
    const totalIncome = () => {
        let totalIncome = 0;

        // Sum up the amounts of all income entries
        incomes.forEach((income) => {
            totalIncome += income.amount;
        });

        return totalIncome;
    };

    // Functions for managing expenses (similar structure to income functions)

    // Function to add an expense entry
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message);
            });
        getExpenses(); // Refresh the list of expenses
    };

    // Function to get a list of expenses
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`);
        setExpenses(response.data); // Update the expenses state
    };

    // Function to delete an expense entry
    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses(); // Refresh the list of expenses
    };

    // Function to calculate the total expenses
    const totalExpense = () => {
        let totalExpense = 0;

        // Sum up the amounts of all expense entries
        expenses.forEach((expense) => {
            totalExpense += expense.amount;
        });

        return totalExpense;
    };

    // Function to calculate the total balance (income - expenses)
    const totalBalance = () => {
        return totalIncome() - totalExpense();
    };

    // Function to retrieve transaction history (combining incomes and expenses)
    const transactionHistory = () => {
        const history = [...incomes, ...expenses];

        // Sort the history by date in descending order
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        // Return the most recent 3 transactions
        return history.slice(0, 3);
    };

    // Provide the defined functions and state values to the components
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}  
        </GlobalContext.Provider>
    );
};

// Custom hook for accessing global context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
