import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import expensesData from '../data/expensesData'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(expensesData)

  // initialize expense to edit
  const [expenseToEdit, setExpenseToEdit] = useState({
    expense: {},
    edit: false,
  })

  // Add expense
  const addExpense = (expense) => {
    expense.id = uuidv4()
    setExpenses([expense, ...expenses])
  }

  // Edit expense
  // Set the expense item to update and render to form
  // expense coming from the clicked edit icon
  const editExpense = (expense) => {
    console.log(`Edit item: ${expense}`)

    setExpenseToEdit({ expense, edit: true })
  }

  // Update expense
  const updateExpense = (id, updExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updExpense } : expense
      )
    )
  }

  // Delete expense
  const deleteExpense = (id) => {
    console.log(`Delete id: ${id}`)

    if (window.confirm('Are you sure you want to delete an item?')) {
      setExpenses(expenses.filter((expense) => expense.id !== id))
    }
  }

  // Currency Format Helper
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        expenseToEdit,
        setExpenseToEdit,
        addExpense,
        editExpense,
        updateExpense,
        deleteExpense,
        currencyFormat,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext
