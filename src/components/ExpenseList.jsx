import { ListGroup } from 'react-bootstrap'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses }) {
  let content

  if (expenses.length === 0) {
    content = <h4 className='text-center'>No items yet.</h4>
  } else {
    content = (
      <>
        <h4>Expense History</h4>
        <ListGroup>
          {expenses.map((expense, idx) => (
            <ExpenseItem key={idx} expense={expense} />
          ))}
        </ListGroup>
      </>
    )
  }

  return <section className='py-4'>{content}</section>
}

export default ExpenseList
