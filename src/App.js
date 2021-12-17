// import { useState } from 'react'

import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import NewExpense from './components/NewExpense'

import { ExpensesProvider } from './context/ExpensesContext'

function App() {
  // const [expenses, setExpenses] = useState(expensesData)

  return (
    <ExpensesProvider>
      <Layout>
        {/* <ExpenseInfo expenses={expenses} /> */}
        <ExpenseInfo />

        {/* <ExpenseList expenses={expenses} /> */}
        <ExpenseList />

        <NewExpense />
      </Layout>
    </ExpensesProvider>
  )
}

export default App
