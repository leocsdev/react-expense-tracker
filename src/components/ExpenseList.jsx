import { ListGroup } from 'react-bootstrap'

function ExpenseList() {
  return (
    <section className='py-4'>
      <h4>Expense History</h4>
      <ListGroup>
        <ListGroup.Item>Cash</ListGroup.Item>
        <ListGroup.Item>Book</ListGroup.Item>
        <ListGroup.Item>Camera</ListGroup.Item>
      </ListGroup>
    </section>
  )
}

export default ExpenseList
