import { useContext } from 'react'
import ExpensesContext from '../context/ExpensesContext'

import { Col, ListGroup, Row } from 'react-bootstrap'

function ExpenseItem({ expense }) {
  const { currencyFormat } = useContext(ExpensesContext)

  // // Currency Helper
  // const currencyFormat = (num) => {
  //   return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  // }

  return (
    <ListGroup.Item>
      <Row>
        <Col className='d-none d-sm-block'>{expense.date}</Col>
        <Col sm={6} className='text-center text-sm-start'>
          {expense.item}
        </Col>
        <Col className='text-center text-sm-end'>
          {currencyFormat(expense.amount)}
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default ExpenseItem
