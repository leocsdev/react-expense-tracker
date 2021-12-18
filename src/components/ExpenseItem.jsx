import { useContext } from 'react'
import ExpensesContext from '../context/ExpensesContext'

import { Col, ListGroup, Row } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'

function ExpenseItem({ expense }) {
  const { currencyFormat, deleteExpense } = useContext(ExpensesContext)

  return (
    <ListGroup.Item>
      <Row>
        <Col className='d-none d-sm-block'>{expense.date}</Col>
        <Col sm={4} className='text-center text-sm-start'>
          {expense.item}
        </Col>
        <Col className='text-center text-sm-end'>
          {currencyFormat(expense.amount)}{' '}
          <span
            style={{ display: 'inline-block', paddingLeft: '0.5rem' }}
            onClick={() => deleteExpense(expense.id)}
          >
            <FaTimes color='red' size={14} />
          </span>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default ExpenseItem
