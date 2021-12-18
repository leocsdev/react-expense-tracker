import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import expensesData from '../data/expensesData'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(expensesData)

  // Add expense
  const addExpense = (expense) => {
    expense.id = uuidv4()
    setExpenses([expense, ...expenses])
  }

  // Update expense

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
      value={{ expenses, addExpense, currencyFormat, deleteExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext
