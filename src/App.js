import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ExpenseInfo from './components/ExpenseInfo'
import TransactionList from './components/TransactionList'
import NewTransaction from './components/NewTransaction'

function App() {
  return (
    <Layout>
      <Header />

      <ExpenseInfo />
      <br />
      <TransactionList />
      <br />
      <NewTransaction />

      <Footer />
    </Layout>
  )
}

export default App
