import { useContext } from 'react'
import ExpensesContext from '../context/ExpensesContext'

import { Card, Col, Row } from 'react-bootstrap'
// import style from './ExpenseInfo.module.css'

function ExpenseInfo() {
  const { expenses, currencyFormat } = useContext(ExpensesContext)

  // Should be coming from data
  let totalIncome = 1000

  let totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount
  }, 0)

  let totalBalance = totalIncome - totalExpense

  return (
    <section className='pb-4'>
      <Card className='text-center py-3 mb-3'>
        <h4 className='to-upper mb-0'>Your Balance</h4>
        <h2 className='text-success mb-0'>{currencyFormat(totalBalance)}</h2>
      </Card>

      <Row className='text-center'>
        <Col sm={6} className='mb-3 mb-sm-0'>
          <Card className='p-3'>
            <h5 className='to-upper mb-0'>Income</h5>
            <h4 className='mb-0 text-warning'>{currencyFormat(totalIncome)}</h4>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='p-3'>
            <h5 className='to-upper mb-0'>Expense</h5>
            <h4 className='mb-0 text-danger'>{currencyFormat(totalExpense)}</h4>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default ExpenseInfo
