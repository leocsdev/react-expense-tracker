import { useState } from 'react'

import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import NewExpense from './components/NewExpense'

import expensesData from './data/expensesData'

function App() {
  const [expenses, setExpenses] = useState(expensesData)

  const addExpenseHandler = (expenseData) => {
    // add expense
    setExpenses([expenseData, ...expenses])
  }

  return (
    <Layout>
      <ExpenseInfo expenses={expenses} />

      <ExpenseList expenses={expenses} />

      <NewExpense addExpenseHandler={addExpenseHandler} />
    </Layout>
  )
}

export default App
