import { Col, ListGroup, Row } from 'react-bootstrap'

function ExpenseItem({ expense }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col className='d-none d-sm-block'>{expense.date}</Col>
        <Col sm={8} md={6} className='text-center text-sm-start'>
          {expense.item}
        </Col>
        <Col className='text-center text-sm-end'>{expense.amount}</Col>
      </Row>
    </ListGroup.Item>
  )
}

export default ExpenseItem
