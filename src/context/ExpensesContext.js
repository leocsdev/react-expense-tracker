import { createContext, useState } from 'react'
import expensesData from '../data/expensesData'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(expensesData)

  const addExpense = (expenseData) => {
    // add expense
    setExpenses([expenseData, ...expenses])
  }

  // Currency Format Helper
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense, currencyFormat }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext
