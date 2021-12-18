import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

import { ExpensesProvider } from './context/ExpensesContext'

function App() {
  return (
    <ExpensesProvider>
      <Layout>
        <ExpenseInfo />
        <ExpenseList />
        <ExpenseForm />
      </Layout>
    </ExpensesProvider>
  )
}

export default App
