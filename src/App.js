import Layout from './components/layout/Layout'

import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import NewExpense from './components/NewExpense'

function App() {
  return (
    <Layout>
      <ExpenseInfo />

      <ExpenseList />

      <NewExpense />
    </Layout>
  )
}

export default App
