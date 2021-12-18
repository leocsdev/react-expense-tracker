import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import NewExpense from './components/NewExpense'

import { ExpensesProvider } from './context/ExpensesContext'

function App() {
  return (
    <ExpensesProvider>
      <Layout>
        <ExpenseInfo />
        <ExpenseList />
        <NewExpense />
      </Layout>
    </ExpensesProvider>
  )
}

export default App
