import { useState } from 'react'

import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import NewExpense from './components/NewExpense'

import expensesData from './data/expensesData'

function App() {
  const [expenses, setExpenses] = useState(expensesData)

  return (
    <Layout>
      <ExpenseInfo />

      <ExpenseList expenses={expenses} />

      <NewExpense />
    </Layout>
  )
}

export default App
